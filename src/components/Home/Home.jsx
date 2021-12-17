import React from "react";
import './Home.css'
import komra from '../../assets/images/komra.png'
import gif from '../../assets/images/mygif.gif'
import gif2 from '../../assets/images/secondgif.gif'
import dots from '../../assets/images/greendots.png'
import circle from '../../assets/images/yellowcircle.png'
import icon1 from '../../assets/images/icon1.png'
import icon2 from '../../assets/images/icon2.png'
import icon3 from '../../assets/images/icon3.png'

const Home = () => {
    return (
        <>
            {/*********************************** تصفح التطبيقات  ***************************************/}
            <section className="mb-5">
                <div className=" text-center mb-5 pb-5">
                    <h2 className="text-center fw-bold mt-5 pt-3 section__header mb-3">
                        طور متجرك ووسع آفاق تجارتك مع سوق تطبيقات زد
                    </h2>
                    <h4 className="text-center section__body">
                        <p>طور تجارتك من خلال تطبيقات وحلول سوق تطبيقات زد التي تساعدك </p>
                        <p>في نمو أرباحك عبر إدارة عمليات متجرك بشكل فعال واحترافي</p>
                    </h4>
                    <button className="btn btn-lg text-center fw-bold fs-5 pe-4 py-3 my-4 section__btn">


                        تصفح التطبيقات
                        <span className="me-2" >&#x3e;</span>
                    </button>
                </div>
            </section>

            {/*********************************** GIF Section ***************************************/}
            <section className="mb-5">

                <div className="d-flex justify-content-center align-items-center position-relative">
                    <img src={circle} id="dots" className="firstcircle position-absolute d-none d-xl-inline-block"></img>
                    <img className="gif img-thumbnail bg-transparent border-0 position-relative" src={gif} alt="home gif"></img>
                    <img src={dots} id="circle" className="firstdots position-absolute d-none d-xl-inline-block"></img>
                </div>


            </section>

            {/*********************************** كل ما تحتاجه    ***************************************/}
            <section className="d-flex all__you__need">
                <div className="px-3  w-50">
                    <h2 className="fw-bold section__header">
                        كل ما تحتاجه لنمو متجرك في مكان واحد
                    </h2>
                    <h4 className="fs-5 mt-4" >مميزات سوق تطبيقات زد تساعدك في سهولة وسرعة الاستفادة من خدمات وحلول سوق التطبيقات لنمو متجرك ومضاعفة أرباحك </h4>
                    <div className="d-flex flex-column arb-div">
                        <div className="d-flex align-items-center mb-4 ">
                            <figure className="rounded-circle shadow bg-body mb-0 item">
                                <img src={icon1} alt="icon1" className="px-2 py-2"/>
                            </figure>
                            <h5 className="me-4 mb-0" style={{ fontSize: "1rem" }}>سهولة اداراة وتفعيل تطبيقاتك من نفس لوحة تحكم متجرك</h5>
                        </div>

                        <div className="d-flex align-items-center mb-4">
                            <figure className="rounded-circle shadow bg-body mb-0 item">
                                <img src={icon2} alt="icon2" className="px-2 py-2"/>
                            </figure>
                            <h5 className="me-4 mb-0" style={{ fontSize: "1rem" }}>دعم فني وتقني متكامل متوفر على مدار الساعة</h5>
                        </div>
                        <div className="d-flex align-items-center mb-4">
                            <figure className="rounded-circle shadow bg-body mb-0 item">
                                <img src={icon3} alt="icon3" className="px-2 py-2"/>
                            </figure>
                            <h5 className="me-4 mb-0 " style={{ fontSize: "1rem" }}>أسعار تنافسية مع تجربة مجانية وباقات اشتراك متنوعة</h5>
                        </div>
                    </div>

                    <button
                        className="btn btn-lg section__btn fw-bold fs-5 pe-4 py-3 my-4"
                    >
                        تصفح التطبيقات
                        <span className="me-2 fs-5 d-inline-block">&#65125;</span>
                    </button>
                </div>

                <div className="d-flex flex-wrap justify-content-center align-items-center position-relative ms-xl-5 ps-xl-4 over">
          <img src={dots} className="dots position-absolute d-none d-xl-inline-block"/>
          <img src={gif2} className="gif img-thumbnail bg-transparent border-0 position-relative"/>
          <img src={circle} className="circle position-absolute d-none d-xl-inline-block"/>
        </div>

            </section>

            {/***********************************  التطبيقات المميزة ***************************************/}



            <section className="d-flex flex-column align-items-center mb-5">

                <h4 className=" text-center font-weight-bold fw-bold">التطبيقات المميزة</h4>
                <h5 className="text-center font-weight-light mb-5 pb-3">تطبيقات تقدم حلول وخدمات مميزة نوصي بتجربتها</h5>

                <div className="d-flex flex-wrap justify-content-evenly align-items-center">

                    <div className="d-flex px-2 py-3 mb-2 app__card">
                        <figure className="mx-2">
                            <img src={komra} className="komra__icon"></img>
                        </figure>

                        <div className="mx-2">
                            <div className="d-flex">
                                <h5 className="fw-bold ms-5 mb-0">قمرة</h5>
                                <div className="d-flex align-items-baseline">
                                    &#11088;
                                    <p className="text-success fs-5 me-1 mb-0 stars">5</p>
                                </div>
                            </div>
                            <p>
                                تطوير: <span className="text-secondary">عمر برهوم</span>
                            </p>
                            <p>نظام الولاء الأمثل الذي يمكنك من رفع مبيعاتك</p>
                            <p className="mb-0">
                                نظام الولاء الأمثل الذي يمكنك من رفع مبيعاتك
                            </p>
                        </div>
                    </div>

                    <div className="d-flex px-2 py-3 mb-2 app__card">
                        <figure className="mx-2">
                            <img src={komra} className="komra__icon"></img>
                        </figure>

                        <div className="mx-2">
                            <div className="d-flex">
                                <h5 className="fw-bold ms-5 mb-0">قمرة</h5>
                                <div className="d-flex align-items-baseline">
                                    &#11088;
                                    <p className="text-success fs-5 me-1 mb-0 stars">5</p>
                                </div>
                            </div>
                            <p>
                                تطوير: <span className="text-secondary">عمر برهوم</span>
                            </p>
                            <p>نظام الولاء الأمثل الذي يمكنك من رفع مبيعاتك</p>
                            <p className="mb-0">
                                نظام الولاء الأمثل الذي يمكنك من رفع مبيعاتك
                            </p>
                        </div>
                    </div>

                    <div className="d-flex px-2 py-3 mb-2 app__card">
                        <figure className="mx-2">
                            <img src={komra} className="komra__icon"></img>
                        </figure>

                        <div className="mx-2">
                            <div className="d-flex">
                                <h5 className="fw-bold ms-5 mb-0">قمرة</h5>
                                <div className="d-flex align-items-baseline">
                                    &#11088;
                                    <p className="text-success fs-5 me-1 mb-0 stars">5</p>
                                </div>
                            </div>
                            <p>
                                تطوير: <span className="text-secondary">عمر برهوم</span>
                            </p>
                            <p>نظام الولاء الأمثل الذي يمكنك من رفع مبيعاتك</p>
                            <p className="mb-0">
                                نظام الولاء الأمثل الذي يمكنك من رفع مبيعاتك
                            </p>
                        </div>
                    </div>

                    <div className="d-flex px-2 py-3 mb-2 app__card">
                        <figure className="mx-2">
                            <img src={komra} className="komra__icon"></img>
                        </figure>

                        <div className="mx-2">
                            <div className="d-flex">
                                <h5 className="fw-bold ms-5 mb-0">قمرة</h5>
                                <div className="d-flex align-items-baseline">
                                    &#11088;
                                    <p className="text-success fs-5 me-1 mb-0 stars">5</p>
                                </div>
                            </div>
                            <p>
                                تطوير: <span className="text-secondary eee">عمر برهوم</span>
                            </p>
                            <p>نظام الولاء الأمثل الذي يمكنك من رفع مبيعاتك</p>
                            <p className="mb-0">
                                نظام الولاء الأمثل الذي يمكنك من رفع مبيعاتك
                            </p>
                        </div>
                    </div>
                </div>

                <button
                    type="button"
                    className="btn  section__btn bg-transparent fs-4 pe-4 py-3 mb-5"
                >
                    جميع التطبيقات
                    <span className="me-2 fs-4 d-inline-block">&#65125;</span>
                </button>




            </section>
        </>
    );
};

export default Home;