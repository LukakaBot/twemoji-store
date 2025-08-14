import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
import Image from 'next/image'
import { useImperativeHandle, useMemo, useState } from 'react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { useConfigStore } from '@/store'
import { findSkinEmoji, getEmojiUrl } from '@/utils/tool'

export interface AppSelectModalRef {
  openModal: () => void
  closeModal: () => void
}

interface AppSelectModalProps {
  ref?: React.Ref<AppSelectModalRef>
}

const skinTones = [
  { ariaLabel: 'Toggle Default Skin Tone', value: 'default', bg: 'bg-[#ffcc22]' },
  { ariaLabel: 'Toggle Light Skin Tone', value: '1f3fb', bg: 'bg-[#fae0c0]' },
  { ariaLabel: 'Toggle Medium-Light Skin Tone', value: '1f3fc', bg: 'bg-[#e2c19d]' },
  { ariaLabel: 'Toggle Medium Skin Tone', value: '1f3fd', bg: 'bg-[#c5946c]' },
  { ariaLabel: 'Toggle Medium-Dark Skin Tone', value: '1f3fe', bg: 'bg-[#9f693f]' },
  { ariaLabel: 'Toggle Dark Skin Tone', value: '1f3ff', bg: 'bg-[#5c473d]' },
]

export default function AppSelectModal(props: AppSelectModalProps) {
  const [open, setOpen] = useState(false)
  const { selectEmoji, skinTone, setSkinTone, clearSkinTone } = useConfigStore()
  const [copyBtnText, setCopyBtnText] = useState('Copy')

  const skinEmoji = useMemo(() => findSkinEmoji(selectEmoji!, skinTone), [selectEmoji, skinTone])

  const emojiUrl = useMemo(() => skinEmoji ? getEmojiUrl(skinEmoji) : '', [skinEmoji])

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopyBtnText('Copied!')
      setTimeout(() => setCopyBtnText('Copy'), 1500)
    }
    catch (err) {
      toast.error('Copy failed')
      console.error(err)
    }
  }

  const openModal = () => {
    setOpen(true)
  }

  const closeModal = () => {
    setOpen(false)
  }

  useImperativeHandle(props.ref, () => ({
    openModal,
    closeModal,
  }))

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      clearSkinTone()
    }
    setOpen(open)
  }

  const handleSkinToneChange = (value: string) => {
    setSkinTone(value)
  }

  return (
    selectEmoji && (
      <Dialog open={open} onOpenChange={handleOpenChange}>
        <DialogContent className="sm:max-w-[400px]">
          <VisuallyHidden>
            <DialogHeader>
              <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your account
                and remove your data from our servers.
              </DialogDescription>
            </DialogHeader>
          </VisuallyHidden>
          <div className="flex gap-4">
            <Image className="mb-4" src={emojiUrl} width={90} height={90} alt={skinEmoji?.emoji} loading="lazy" />
            <div className="flex flex-col gap-2">
              <div className="text-lg leading-none font-semibold text-left">{skinEmoji.label}</div>
              <div className="text-muted-foreground text-sm">
                <div className="flex gap-2">
                  <span className="w-18 font-semibold">tag:</span>
                  <span className="flex-1">
                    [
                    {selectEmoji?.tags && selectEmoji.tags?.map(tag => `#${tag}`).join(' ')}
                    ]
                  </span>
                </div>
                <div className="flex gap-2">
                  <span className="w-18 font-semibold">emoji:</span>
                  <span className="flex-1">{skinEmoji.emoji}</span>
                </div>
                <div className="flex gap-2">
                  <span className="w-18 font-semibold">since:</span>
                  <span className="flex-1">{`version ${selectEmoji.version}`}</span>
                </div>
                <div className="flex gap-2">
                  <span className="w-18 font-semibold">hex:</span>
                  <span className="flex-1">{skinEmoji.hexcode.toUpperCase()}</span>
                </div>
              </div>
            </div>
          </div>
          {selectEmoji?.skins && (
            <div>
              <span className="my-1 text-sm">Skin Tone</span>
              <ToggleGroup value={skinTone} variant="outline" type="single" onValueChange={handleSkinToneChange}>
                {
                  skinTones.map(skinTone => (
                    <ToggleGroupItem className="cursor-pointer focus-visible:border-unset focus-visible:ring-0" value={skinTone.value} aria-label={skinTone.ariaLabel} key={skinTone.ariaLabel}>
                      <div className={`w-3 h-3 rounded-full ${skinTone.bg}`} />
                    </ToggleGroupItem>
                  ))
                }
              </ToggleGroup>
            </div>
          )}
          <div className="grid grid-cols-3 gap-2">
            <Button className="font-bold bg-mustard-500 hover:bg-mustard-300 cursor-pointer focus-visible:ring-0" variant="secondary" onClick={() => handleCopy(skinEmoji.emoji)}>{copyBtnText}</Button>
            <Button className="font-bold bg-mustard-500 hover:bg-mustard-300 cursor-pointer" variant="secondary" onClick={() => window.open(getEmojiUrl(skinEmoji, 'svg'), '_blank')}>svg</Button>
            <Button className="font-bold bg-mustard-500 hover:bg-mustard-300 cursor-pointer" variant="secondary" onClick={() => window.open(getEmojiUrl(skinEmoji, 'png'), '_blank')}>png</Button>
          </div>
        </DialogContent>
      </Dialog>
    )
  )
}
