import Link from './Link'

const checkIcon = (
    <svg width="15" height="15" viewBox="0 0 8 6" className="mr-2 fill-current" color="green">
        <path d="M2.90567 6.00024C2.68031 6.00024 2.48715 5.92812 2.294 5.74764L0.169254 3.43784C-0.0560926 3.18523 -0.0560926 2.78827 0.169254 2.53566C0.39461 2.28298 0.74873 2.28298 0.974086 2.53566L2.90567 4.66497L7.02642 0.189715C7.25175 -0.062913 7.60585 -0.062913 7.83118 0.189715C8.0566 0.442354 8.0566 0.839355 7.83118 1.09198L3.54957 5.78375C3.32415 5.92812 3.09882 6.00024 2.90567 6.00024Z" />
    </svg>
)

const Hero = ({ header, blue, body, check1, check2, check3 }) => (
    <div id={'hero'} className="space-y-2 pb-8 pt-6 md:space-y-2">
        <p className="text-md sm:text-md tracking-tight text-blue-600 dark:text-pink-400 md:text-lg">
            {blue}
        </p>
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-3xl md:leading-14">
            {header}
        </h1>
        <div className={'py-5 text-3xl font-extrabold'}>
            <Link href={'tel:+79104223605'}>+7 910 422 3605</Link>
        </div>
        <div className={'py-2'}>
            <p>{body}</p>
        </div>
        <table className="text-left font-thin tracking-tight text-gray-900 dark:text-gray-100 sm:text-xl md:text-xl">
            <thead>
            <tr>
                <th>{checkIcon}</th>
                <th>{check1}&nbsp;</th>
            </tr>
            <tr>
                <th>{checkIcon}</th>
                <th>{check2}&nbsp;</th>
            </tr>
            <tr>
                <th>{checkIcon}</th>
                <th>{check3}&nbsp;</th>
            </tr>
            </thead>
        </table>
    </div>
)

export default Hero
