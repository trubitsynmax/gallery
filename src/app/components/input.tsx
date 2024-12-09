

export default function Search() {
	return (
		<div className="search">
			<div className="max-w-[1200px] mx-auto h-full flex flex-col items-center justify-center">
			<form className="w-full">
				<input type="text" className='border-[1px] border-solid border-stone-950 w-full p-2 text-2xl rounded-lg mb-4' placeholder='Напишите название галереи...'/>
			</form>
			<div className='flex justify-between w-full gap-12'>
				<a href="#" className='border w-2/4 text-center py-4 text-xl rounded-lg mb-4 bg-[#f5f5dc]'>Создать категорию</a>
				<a href="#" className='border w-2/4 text-center py-4 text-xl rounded-lg mb-4 bg-[#f5f5dc]'>Посмотреть существующие</a>
			</div>
			</div>
		</div>
	);
}