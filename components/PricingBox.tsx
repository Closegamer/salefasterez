'use client'

import { useState } from 'react'

const PricingBox = (props) => {
    const {
        minSaleRub,
        packageName,
        subtitle,
        initialMinPrice,
        initialMaxPrice,
        children,
        ost,
        lack,
    } = props

    const [newPrice, setNewPrice] = useState(initialMinPrice)
    let minQuant = Math.round(minSaleRub / initialMaxPrice)
    if (lack) {
        minQuant = ost
    }
    const [quant, setNewQuant] = useState(ost)
    const [color, setNewColor] = useState(1000)
    const [colorClass, setNewColorClass] = useState('amount text-green-' + color)

    const priceStep: any = (initialMaxPrice / initialMinPrice).toFixed(2)
    const priceSteps: any = ((initialMaxPrice - initialMinPrice) / priceStep).toFixed(2)
    const quantStep: any = ((ost - minQuant) / priceSteps).toFixed(2)

    let isDisabled = false
    if (initialMinPrice == initialMaxPrice) {
        isDisabled = true
    }

    const handleChange = (e) => {
        e.preventDefault()
        const newQuant = Math.round(e.target.value)
        const oldQuant = quant

        let increase = false
        if (newQuant > oldQuant) {
            increase = true
        }

        if (increase) {
            const quantStepsMadenIncr = newQuant / quantStep
            setNewPrice((initialMaxPrice - priceStep * quantStepsMadenIncr).toFixed(2))
        } else {
            const delta = newQuant - oldQuant
            const deltaSteps = delta / quantStep

            let newPricePre = (newPrice - priceStep * deltaSteps).toFixed(2)
            if (newPricePre < initialMinPrice) {
                newPricePre = initialMinPrice
            }
            setNewPrice(newPricePre)
        }

        setNewQuant(newQuant)
    }

    return (
        <div className="w-full rounded-md border-2 border-solid border-blue-100 dark:border-none">
            <div
                className="wow fadeInUp shadow-signUp relative z-10 rounded-md bg-white px-8 py-10 dark:bg-[#1D2144]"
                data-wow-delay=".1s"
            >
                <div className="items-center justify-between">
                    <h4 className="text-dark mb-2 text-3xl font-extrabold dark:text-white">{packageName}</h4>
                    <p className="text-body-color text-md mb-7">{subtitle}</p>
                    <h3 className="price mb-2 text-5xl font-bold text-black dark:text-white">
                        ₽<span className={colorClass}>{newPrice}</span>
                    </h3>
                </div>
                <div className={'my-10'}>
                    <label
                        htmlFor="quantRange"
                        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                        {quant} (количество рулонов)
                    </label>
                    {!isDisabled && (
                        <input
                            id="quantRange"
                            type="range"
                            min={minQuant}
                            max={ost}
                            value={quant}
                            step={quantStep}
                            disabled={isDisabled}
                            className={
                                'range-lg w-full cursor-pointer appearance-none rounded-lg bg-blue-500 dark:bg-pink-500'
                            }
                            onChange={handleChange}
                        />
                    )}
                    {!!isDisabled && <div className={'mb-10'}>&nbsp;</div>}
                </div>
                <div>{children}</div>
                <div className="absolute bottom-0 right-0 z-[-1]">
                    <svg
                        width="179"
                        height="158"
                        viewBox="0 0 179 158"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            opacity="0.5"
                            d="M75.0002 63.256C115.229 82.3657 136.011 137.496 141.374 162.673C150.063 203.47 207.217 197.755 202.419 167.738C195.393 123.781 137.273 90.3579 75.0002 63.256Z"
                            fill="url(#paint0_linear_70:153)"
                        />
                        <path
                            opacity="0.3"
                            d="M178.255 0.150879C129.388 56.5969 134.648 155.224 143.387 197.482C157.547 265.958 65.9705 295.709 53.1024 246.401C34.2588 174.197 100.939 83.7223 178.255 0.150879Z"
                            fill="url(#paint1_linear_70:153)"
                        />
                        <defs>
                            <linearGradient
                                id="paint0_linear_70:153"
                                x1="69.6694"
                                y1="29.9033"
                                x2="196.108"
                                y2="83.2919"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                            </linearGradient>
                            <linearGradient
                                id="paint1_linear_70:153"
                                x1="165.348"
                                y1="-75.4466"
                                x2="-3.75136"
                                y2="103.645"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default PricingBox
