function AppHeader() {
	return 		<header className='border-b-border sticky top-0 z-30 border-b border-dashed'>
			<div className='container-wrapper flex justify-between items-center gap-2'>
				<div className='flex-1 flex gap-2 items-center'>
					<AppIcon className='text-red-500' name='icon-[bxs--hot]' />
					<div>每日热搜</div>
				</div>
				
			</div>
		</header>;
}

export default AppHeader;
