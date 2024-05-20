const Doubleheader = ({ blue, main }) => (
    <div className="space-y-2 pb-8 pt-6 md:space-y-2">
        <p className="sm:text-md text-lg tracking-tight text-blue-600 dark:text-pink-400 md:text-lg">
            {blue}
        </p>
        <h2 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-3xl md:leading-14">
            {main}
        </h2>
    </div>
)

export default Doubleheader
