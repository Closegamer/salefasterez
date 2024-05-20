import Link from '../components/Link'
import Hero from '../components/Hero'
import Doubleheader from "../components/Doubleheader";
import Image from '../components/Image'
import PricingBox from "../components/PricingBox";
import OfferList from "../components/OfferList";
import ContactForm from "../components/ContactForm";

export default function Index() {
    const isBrowser = () => typeof window !== 'undefined' //The approach recommended by Next.js

    const scrollToTop = () => {
        if (!isBrowser()) return
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const checkIcon = (
        <svg width="15" height="15" viewBox="0 0 8 6" className="mr-2 fill-current" color="green">
            <path d="M2.90567 6.00024C2.68031 6.00024 2.48715 5.92812 2.294 5.74764L0.169254 3.43784C-0.0560926 3.18523 -0.0560926 2.78827 0.169254 2.53566C0.39461 2.28298 0.74873 2.28298 0.974086 2.53566L2.90567 4.66497L7.02642 0.189715C7.25175 -0.062913 7.60585 -0.062913 7.83118 0.189715C8.0566 0.442354 8.0566 0.839355 7.83118 1.09198L3.54957 5.78375C3.32415 5.92812 3.09882 6.00024 2.90567 6.00024Z" />
        </svg>
    )

    return (
        <>
            <button
                onClick={scrollToTop}
                className={
                    'fixed bottom-0 right-0 z-50 mb-2 me-2 rounded-lg bg-blue-500 px-5 py-2.5 text-center text-3xl font-medium text-white hover:bg-blue-300 dark:bg-pink-500 dark:hover:bg-pink-300'
                }
            >
                ↑
            </button>
            <div className="flex flex-row" id={'top'}>
                <Hero
                    header={''}
                    blue={'по оптовым ценам'}
                    body={
                        'В связи с ликвидацией склада реализуются остатки термоэтикеток по сниженным ценам. Минимальный заказ - от 5000 рублей!'
                    }
                    check1={'Разные размеры'}
                    check2={'Доставка'}
                    check3={'Самовывоз'}
                />
            </div>
            <hr className={'dark:hidden'} />
            <div className="flex flex-row dark:hidden">
                <div className="space-y-2 pb-8 pt-6 md:space-y-5">
                    <Doubleheader blue={'что это'} main={'Внешний вид'} />
                    <div className={'posRelative mx-auto'}>
                        <Image
                            src={'/img/thermolabel.jpg'}
                            className={'posRelative'}
                            priority={true}
                            fill
                            alt={'Термоэтикетка'}
                        />
                    </div>
                </div>
            </div>
            <hr />
            <div className="flex flex-row" id={'price'}>
                <div className="space-y-2 pb-8 pt-6 md:space-y-5">
                    <Doubleheader blue={'Влияйте на цену товара'} main={'Цены'} />
                    <div className={'grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2'}>
                        <PricingBox
                            packageName={'75 х 120'}
                            subtitle={'Термоэтикетка самоклеящаяся размером 75 на 120 мм по 300 штук в рулоне'}
                            initialMinPrice={130.61}
                            initialMaxPrice={156.73}
                            minSaleRub={5000}
                            ost={15577}
                            lack={false}
                        >
                            <OfferList text="300 штук в рулоне" status="active" />
                            <OfferList text="В наличии на складе" status="active" />
                            <OfferList text="Размеры указаны в мм" status="active" />
                            <OfferList text="Цена указана за 1 рулон" status="active" />
                        </PricingBox>
                        <PricingBox
                            packageName={'58 х 60'}
                            subtitle={'Термоэтикетка самоклеящаяся размером 58 на 60 мм по 400 штук в рулоне'}
                            initialMinPrice={69.55}
                            initialMaxPrice={83.46}
                            minSaleRub={5000}
                            ost={16547}
                            lack={false}
                        >
                            <OfferList text="400 штук в рулоне" status="active" />
                            <OfferList text="В наличии на складе" status="active" />
                            <OfferList text="Размеры указаны в мм" status="active" />
                            <OfferList text="Цена указана за 1 рулон" status="active" />
                        </PricingBox>
                        <PricingBox
                            packageName={'58 х 60'}
                            subtitle={'Термоэтикетка самоклеящаяся размером 58 на 60 мм по 450 штук в рулоне'}
                            initialMinPrice={76.31}
                            initialMaxPrice={91.57}
                            minSaleRub={5000}
                            ost={1900}
                            lack={false}
                        >
                            <OfferList text="450 штук в рулоне" status="active" />
                            <OfferList text="В наличии на складе" status="active" />
                            <OfferList text="Размеры указаны в мм" status="active" />
                            <OfferList text="Цена указана за 1 рулон" status="active" />
                        </PricingBox>
                        <PricingBox
                            packageName={'58 х 40'}
                            subtitle={'Термоэтикетка самоклеящаяся размером 58 на 40 мм по 700 штук в рулоне'}
                            initialMinPrice={98.75}
                            initialMaxPrice={98.75}
                            minSaleRub={5000}
                            ost={40}
                            lack={true}
                        >
                            <OfferList text="700 штук в рулоне" status="active" />
                            <OfferList text="Осталось 40 рулонов" status="inactive" />
                            <OfferList text="Размеры указаны в мм" status="active" />
                            <OfferList text="Цена указана за 1 рулон" status="active" />
                        </PricingBox>
                        <PricingBox
                            packageName={'58 х 40'}
                            subtitle={'Термоэтикетка самоклеящаяся размером 58 на 40 мм по 500 штук в рулоне'}
                            initialMinPrice={59.15}
                            initialMaxPrice={70.98}
                            minSaleRub={5000}
                            ost={25944}
                            lack={false}
                        >
                            <OfferList text="500 штук в рулоне" status="active" />
                            <OfferList text="В наличии на складе" status="active" />
                            <OfferList text="Размеры указаны в мм" status="active" />
                            <OfferList text="Цена указана за 1 рулон" status="active" />
                        </PricingBox>
                        <PricingBox
                            packageName={'43 х 25'}
                            subtitle={'Термоэтикетка самоклеящаяся размером 43 на 25 мм по 1000 штук в рулоне'}
                            initialMinPrice={56.94}
                            initialMaxPrice={68.33}
                            minSaleRub={5000}
                            ost={18485}
                            lack={false}
                        >
                            <OfferList text="1000 штук в рулоне" status="active" />
                            <OfferList text="В наличии на складе" status="active" />
                            <OfferList text="Размеры указаны в мм" status="active" />
                            <OfferList text="Цена указана за 1 рулон" status="active" />
                        </PricingBox>
                        <PricingBox
                            packageName={'30 х 20'}
                            subtitle={'Термоэтикетка самоклеящаяся размером 30 на 20 мм по 2000 штук в рулоне'}
                            initialMinPrice={65.91}
                            initialMaxPrice={79.09}
                            minSaleRub={5000}
                            ost={25944}
                            lack={false}
                        >
                            <OfferList text="2000 штук в рулоне" status="active" />
                            <OfferList text="В наличии на складе" status="active" />
                            <OfferList text="Размеры указаны в мм" status="active" />
                            <OfferList text="Цена указана за 1 рулон" status="active" />
                        </PricingBox>
                        <PricingBox
                            packageName={'30 х 20'}
                            subtitle={'Термоэтикетка самоклеящаяся размером 30 на 20 мм по 1800 штук в рулоне'}
                            initialMinPrice={59.41}
                            initialMaxPrice={71.29}
                            minSaleRub={5000}
                            ost={12331}
                            lack={false}
                        >
                            <OfferList text="1800 штук в рулоне" status="active" />
                            <OfferList text="В наличии на складе" status="active" />
                            <OfferList text="Размеры указаны в мм" status="active" />
                            <OfferList text="Цена указана за 1 рулон" status="active" />
                        </PricingBox>
                    </div>
                </div>
            </div>
            <hr />
            <div className="flex flex-row" id={'contacts'}>
                <div className="space-y-2 pb-8 pt-6 md:space-y-5">
                    <Doubleheader blue={'Свяжитесь с нами'} main={'Контакты'} />
                    <div className="flex flex-row">
                        <span className={'mt-1'}>{checkIcon}</span> Телефон
                    </div>
                    <div className={'text-center'}>
                        <button
                            className={
                                'mb-2 me-2 w-full max-w-80 rounded-lg bg-blue-500 px-5 py-2.5 text-center text-lg font-medium text-white hover:bg-blue-300 dark:bg-pink-500 dark:hover:bg-pink-300'
                            }
                        >
                            <Link href={'tel:+79104223605'}>+7 910 422 3605</Link>
                        </button>
                    </div>
                    <div className="flex flex-row">
                        <span className={'mt-1'}>{checkIcon}</span> Email
                    </div>
                    <div className={'text-center'}>
                        <button
                            className={
                                'mb-2 me-2 w-full max-w-80 rounded-lg bg-blue-500 px-5 py-2.5 text-center text-lg font-medium text-white hover:bg-blue-300 dark:bg-pink-500 dark:hover:bg-pink-300'
                            }
                        >
                            <Link href={'mailto:salefaster@mail.ru'}>salefaster@mail.ru</Link>
                        </button>
                    </div>
                    <div className="flex flex-row">
                        <span className={'mt-1'}>{checkIcon}</span> Адрес
                    </div>
                    <div>141009, Россия, Московская область, город Мытищи, улица Коминтерна, 15 А/2</div>
                </div>
            </div>
            <hr />
            <div className="flex flex-row">
                <div className="space-y-2 pb-8 pt-6 md:space-y-5">
                    <Doubleheader blue={'Предложите свою цену'} main={'Коммерческое предложение'} />
                    <p>Если у Вас есть к нам предложение по цене, мы готовы его обсудить!</p>
                    <div className="flex items-center justify-center pt-4">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </>
    )
};
