import Image from 'next/image'
import { useImperativeHandle, useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { useConfigStore } from '@/store'
import { getEmojiUrl } from '@/utils/tool'

export interface AppSelectModalRef {
  openModal: () => void
  closeModal: () => void
}

interface AppSelectModalProps {
  ref?: React.Ref<AppSelectModalRef>
}

const skinTones = [
  { ariaLabel: 'Toggle Default Skin Tone', value: '', bg: 'bg-[#ffcc22]' },
  { ariaLabel: 'Toggle Light Skin Tone', value: '1f3fb', bg: 'bg-[#fae0c0]' },
  { ariaLabel: 'Toggle Medium-Light Skin Tone', value: '1f3fc', bg: 'bg-[#e2c19d]' },
  { ariaLabel: 'Toggle Medium Skin Tone', value: '1f3fd', bg: 'bg-[#c5946c]' },
  { ariaLabel: 'Toggle Medium-Dark Skin Tone', value: '1f3fe', bg: 'bg-[#9f693f]' },
  { ariaLabel: 'Toggle Dark Skin Tone', value: '1f3ff', bg: 'bg-[#5c473d]' },
]

export default function AppSelectModal(props: AppSelectModalProps) {
  const [open, setOpen] = useState(false)
  const { selectEmoji, skinTone, setSkinTone } = useConfigStore()

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

  return (
    selectEmoji && (
      <Dialog open={open} onOpenChange={setOpen}>
        <form>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <Image className="mb-4" src={getEmojiUrl(selectEmoji, 'svg', skinTone)} width={90} height={90} alt={selectEmoji?.emoji} loading="lazy" />
              <DialogTitle className="text-left">{selectEmoji.label}</DialogTitle>
              <DialogDescription className="text-left">
                [
                {selectEmoji?.tags && selectEmoji.tags?.map(tag => `#${tag}`).join(' ')}
                ]
              </DialogDescription>
            </DialogHeader>
            {selectEmoji?.skins && (
              <div>
                <ToggleGroup value={skinTone} variant="outline" type="single" onValueChange={setSkinTone}>
                  {
                    skinTones.map(skinTone => (
                      <ToggleGroupItem value={skinTone.value} aria-label={skinTone.ariaLabel} key={skinTone.ariaLabel}>
                        <div className={`w-3 h-3 rounded-full ${skinTone.bg}`} />
                      </ToggleGroupItem>
                    ))
                  }
                </ToggleGroup>
              </div>
            )}
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </form>
      </Dialog>
    )
  )
}
