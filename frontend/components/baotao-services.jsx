import "../public/styles/abc.css";
import "../public/styles/main.css";
import "../public/styles/service.css";
import { API_URL } from "@/lib/constants";
import { cookies } from "next/headers";
import LogoutButton from "./logout-button";

export default async function BaotaoService() {
  let user = null;

  try {
    const cookieStore = await cookies();
    const tokenUser = cookieStore.get("tokenUser")?.value;

    if (tokenUser) {
      const res = await fetch(`${API_URL}/user/info`, {
        headers: {
          Cookie: `tokenUser=${tokenUser}`,
        },
      });
      if (res.ok) {
        const data = await res.json();
        user = data.data.user;
      }
    }
  } catch (err) {
    console.error("Failed to fetch user info:", err);
  }

  const hour = new Date().getHours();
  let partOfDay = "";
  if (hour >= 5 && hour <= 12) {
    partOfDay = "Morning";
  } else if (hour >= 13 && hour <= 17) {
    partOfDay = "Afternoon";
  } else {
    partOfDay = "Evening";
  }

  return (
    <div className="screen-outer clearfix">
      <div className="main" role="main">
        <div className="tbh-service J_Module category-collapse-container--YDicy8ws collapsed--d7fXmlvn">
          <div className="J_Service container--ZokuQqvw service2024--uYMMvbpy">
            <ul className="service-bd--LdDnWwA9" role="menubar">
              <li className="J_Cat cate--EZsNFK5T">
                <div className="first-cate-container--odleAL9p">
                  <i className="icon-cate--xP_I0ts1 tb-ifont"></i>
                  <a
                    className="cate-content-href--HI8wwRts"
                    href="/categories/laptops"
                  >
                    Laptops
                  </a>
                </div>
              </li>
              <li className="J_Cat cate--EZsNFK5T">
                <div className="first-cate-container--odleAL9p">
                  <i className="icon-cate--xP_I0ts1 tb-ifont"></i>
                  <a
                    className="cate-content-href--HI8wwRts"
                    href="/categories/phones"
                  >
                    Phones
                  </a>
                </div>
              </li>
              <li className="J_Cat cate--EZsNFK5T">
                <div className="first-cate-container--odleAL9p">
                  <i className="icon-cate--xP_I0ts1 tb-ifont"></i>
                  <a
                    className="cate-content-href--HI8wwRts"
                    href="/categories/furniture"
                  >
                    Furniture
                  </a>
                  <span className="service-slash--BcpvY80i tb-ifont"></span>
                  <a
                    className="cate-content-href--HI8wwRts"
                    href="/categories/kitchen"
                  >
                    Kitchen
                  </a>
                </div>
              </li>
              <li className="J_Cat cate--EZsNFK5T">
                <div className="first-cate-container--odleAL9p">
                  <i className="icon-cate--xP_I0ts1 tb-ifont"></i>
                  <a
                    className="cate-content-href--HI8wwRts"
                    href="/categories/women-s-wear"
                  >
                    Women&apos;s Wear
                  </a>
                  <span className="service-slash--BcpvY80i tb-ifont"></span>
                  <a
                    className="cate-content-href--HI8wwRts"
                    href="/categories/men-s-wear"
                  >
                    Men&apos;s Wear
                  </a>
                </div>
              </li>
              <li className="J_Cat cate--EZsNFK5T">
                <div className="first-cate-container--odleAL9p">
                  <i className="icon-cate--xP_I0ts1 tb-ifont"></i>
                  <a
                    className="cate-content-href--HI8wwRts"
                    href="/categories/women-s-shoes"
                  >
                    Women&apos;s Shoes
                  </a>
                  <span className="service-slash--BcpvY80i tb-ifont"></span>
                  <a
                    className="cate-content-href--HI8wwRts"
                    href="/categories/men-s-shoes"
                  >
                    Men&apos;s Shoes
                  </a>
                  <span className="service-slash--BcpvY80i tb-ifont"></span>
                  <a
                    className="cate-content-href--HI8wwRts"
                    href="/categories/sports"
                  >
                    Sports
                  </a>
                  <span className="service-slash--BcpvY80i tb-ifont"></span>
                  <a
                    className="cate-content-href--HI8wwRts"
                    href="/categories/outdoor"
                  >
                    Outdoor
                  </a>
                </div>
              </li>
              <li className="J_Cat cate--EZsNFK5T">
                <div className="first-cate-container--odleAL9p">
                  <i className="icon-cate--xP_I0ts1 tb-ifont"></i>
                  <a
                    className="cate-content-href--HI8wwRts"
                    href="/categories/automotive"
                  >
                    Automotive
                  </a>
                </div>
              </li>
              <li className="J_Cat cate--EZsNFK5T">
                <div className="first-cate-container--odleAL9p">
                  <i className="icon-cate--xP_I0ts1 tb-ifont"></i>
                  <a
                    className="cate-content-href--HI8wwRts"
                    href="/categories/accessories"
                  >
                    Accessories
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="core J_Core">
          <div className="business-entry-container">
            <div
              className="tbpc-row row-base"
              style={{
                marginLeft: "-8px",
                marginRight: "-8px",
                maxWidth: 1616,
                marginBottom: 16,
              }}
            >
              {/* <div className="tbpc-col tbpc-col-30 business-entry-col tbpc-col tbpc-col-horizon-8 business-entry-col">
                <div className="business-entry-slide-banner" data-spm="banner">
                  <div
                    className="slick-slider home-ad-banner slick-initialized"
                    dir="ltr"
                  >
                    <button
                      type="button"
                      data-role="none"
                      className="slick-arrow slick-prev"
                      style={{ display: "block" }}
                    >
                      {" "}
                      Previous
                    </button>
                    <div className="slick-list">
                      <div
                        className="slick-track"
                        style={{
                          width: 3003,
                          opacity: 1,
                          transform: "translate3d(-1638px, 0px, 0px)",
                          transition: "-webkit-transform 500ms",
                        }}
                      >
                        <div
                          data-index={-1}
                          tabIndex={-1}
                          className="slick-slide slick-cloned"
                          aria-hidden="true"
                          style={{ width: 273 }}
                        >
                          <div>
                            <div
                              tabIndex={-1}
                              style={{ width: "100%", display: "inline-block" }}
                            >
                              <a
                                className="home-ad-banner-item"
                                href="https://huodong.taobao.com/wow/a/act/tao/dailygroup/23509/24308/wupr?wh_pid=daily-579337&disableNav=YES&status_bar_transparent=true&custom_content_source=a2113w.42000075"
                                data-spm="d5"
                                style={{
                                  backgroundImage:
                                    'url("https://img.alicdn.com/imgextra/i4/O1CN013YccH91yOernl6nPb_!!6000000006569-2-tps-1040-384.png")',
                                  height: 158,
                                }}
                              >
                                <div
                                  className="home-ad-banner-item-content-container"
                                  style={{ color: "rgb(255, 255, 255)" }}
                                >
                                  <img
                                    src="https://img.alicdn.com/imgextra/i1/O1CN01YakTJw1CucxKa8KAq_!!6000000000141-2-tps-260-64.png"
                                    className="home-ad-banner-item-logo"
                                    height={16}
                                  />
                                  <div className="home-ad-banner-item-title-top">
                                    家享生活
                                  </div>
                                  <div className="home-ad-banner-item-title-middle">
                                    叠加国补低至6折
                                  </div>
                                  <div className="home-ad-banner-item-subtitle">
                                    家享好物爆款直降
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div
                          data-index={0}
                          className="slick-slide slick-active slick-current"
                          tabIndex={-1}
                          aria-hidden="false"
                          style={{ outline: "none", width: 273 }}
                        >
                          <div>
                            <div
                              tabIndex={-1}
                              style={{ width: "100%", display: "inline-block" }}
                            >
                              <a
                                className="home-ad-banner-item"
                                href="https://huodong.taobao.com/wow/a/act/tao/dailygroup/23509/24308/wupr?spm=2c32bd2e.711942f7.0.0.3fa366d3luybJq&wh_pid=daily-579340&disableNav=YES&status_bar_transparent=true&custom_content_source=a2113w.42000259"
                                data-spm="d1"
                                style={{
                                  backgroundImage:
                                    'url("https://img.alicdn.com/imgextra/i2/O1CN01NtokqT28uqreleGuJ_!!6000000007993-1-tps-1040-384.gif")',
                                  height: 158,
                                }}
                              >
                                <div
                                  className="home-ad-banner-item-content-container"
                                  style={{ color: "rgb(255, 255, 255)" }}
                                >
                                  <img
                                    src="https://img.alicdn.com/imgextra/i1/O1CN01cSiV4Y1n3AVfIslHC_!!6000000005033-2-tps-140-32.png"
                                    className="home-ad-banner-item-logo"
                                    height={16}
                                  />
                                  <div className="home-ad-banner-item-title-top">
                                    双旦爆款不只5折
                                  </div>
                                  <div className="home-ad-banner-item-title-middle">
                                    券后低至7.7折起{" "}
                                  </div>
                                  <div className="home-ad-banner-item-subtitle">
                                    官方立减,8.8折起
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div
                          data-index={1}
                          className="slick-slide"
                          tabIndex={-1}
                          aria-hidden="true"
                          style={{ outline: "none", width: 273 }}
                        >
                          <div>
                            <div
                              tabIndex={-1}
                              style={{ width: "100%", display: "inline-block" }}
                            >
                              <a
                                className="home-ad-banner-item"
                                href="https://huodong.taobao.com/wow/a/act/tao/dailygroup/23509/24308/wupr?wh_pid=daily-561441&disableNav=YES&status_bar_transparent=true&custom_content_source=a2113w.30046077"
                                data-spm="d2"
                                style={{
                                  backgroundImage:
                                    'url("https://img.alicdn.com/imgextra/i4/O1CN01mRIt401i1jBXGM6u1_!!6000000004353-2-tps-1040-384.png")',
                                  height: 158,
                                }}
                              >
                                <div
                                  className="home-ad-banner-item-content-container"
                                  style={{ color: "rgb(255, 255, 255)" }}
                                >
                                  <img
                                    src="https://img.alicdn.com/imgextra/i2/O1CN01Rfs0Ak25d2c6VyT45_!!6000000007548-2-tps-260-64.png"
                                    className="home-ad-banner-item-logo"
                                    height={16}
                                  />
                                  <div className="home-ad-banner-item-title-top">
                                    抢官方补贴{" "}
                                  </div>
                                  <div className="home-ad-banner-item-title-middle">
                                    来领券中心{" "}
                                  </div>
                                  <div className="home-ad-banner-item-subtitle">
                                    领大额消费券
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div
                          data-index={2}
                          className="slick-slide"
                          tabIndex={-1}
                          aria-hidden="true"
                          style={{ outline: "none", width: 273 }}
                        >
                          <div>
                            <div
                              tabIndex={-1}
                              style={{ width: "100%", display: "inline-block" }}
                            >
                              <a
                                className="home-ad-banner-item"
                                href="https://huodong.taobao.com/wow/a/act/tao/dailygroup/23509/24308/wupr?wh_pid=daily-579110&disableNav=YES&status_bar_transparent=true&custom_content_source=a2113w.41276631"
                                data-spm="d3"
                                style={{
                                  backgroundImage:
                                    'url("https://img.alicdn.com/imgextra/i2/O1CN01DuZxyJ23qfAADxGsx_!!6000000007307-2-tps-1040-384.png")',
                                  height: 158,
                                }}
                              >
                                <div
                                  className="home-ad-banner-item-content-container"
                                  style={{ color: "rgb(255, 255, 255)" }}
                                >
                                  <img
                                    src="https://img.alicdn.com/imgextra/i2/O1CN01Rfs0Ak25d2c6VyT45_!!6000000007548-2-tps-260-64.png"
                                    className="home-ad-banner-item-logo"
                                    height={16}
                                  />
                                  <div className="home-ad-banner-item-title-top">
                                    双旦礼遇清单{" "}
                                  </div>
                                  <div className="home-ad-banner-item-title-middle">
                                    跟买不出错{" "}
                                  </div>
                                  <div className="home-ad-banner-item-subtitle">
                                    官方立减好货8.8折起
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div
                          data-index={3}
                          className="slick-slide"
                          tabIndex={-1}
                          aria-hidden="true"
                          style={{ outline: "none", width: 273 }}
                        >
                          <div>
                            <div
                              tabIndex={-1}
                              style={{ width: "100%", display: "inline-block" }}
                            >
                              <a
                                className="home-ad-banner-item"
                                href="https://huodong.taobao.com/wow/a/act/tao/dailygroup/23509/24308/wupr?wh_pid=daily-579092&disableNav=YES&status_bar_transparent=true&custom_content_source=a2113w.41255816"
                                data-spm="d4"
                                style={{
                                  backgroundImage:
                                    'url("https://img.alicdn.com/imgextra/i2/O1CN01rHTJwP1s3h2fs2G01_!!6000000005711-2-tps-1040-384.png")',
                                  height: 158,
                                }}
                              >
                                <div
                                  className="home-ad-banner-item-content-container"
                                  style={{ color: "rgb(255, 255, 255)" }}
                                >
                                  <img
                                    src="https://img.alicdn.com/imgextra/i2/O1CN01Rfs0Ak25d2c6VyT45_!!6000000007548-2-tps-260-64.png"
                                    className="home-ad-banner-item-logo"
                                    height={16}
                                  />
                                  <div className="home-ad-banner-item-title-top">
                                    潮电数码
                                  </div>
                                  <div className="home-ad-banner-item-title-middle">
                                    抢24期免息
                                  </div>
                                  <div className="home-ad-banner-item-subtitle">
                                    国补好物至高20%OFF
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div
                          data-index={4}
                          className="slick-slide"
                          tabIndex={-1}
                          aria-hidden="true"
                          style={{ outline: "none", width: 273 }}
                        >
                          <div>
                            <div
                              tabIndex={-1}
                              style={{ width: "100%", display: "inline-block" }}
                            >
                              <a
                                className="home-ad-banner-item"
                                href="https://huodong.taobao.com/wow/a/act/tao/dailygroup/23509/24308/wupr?wh_pid=daily-579337&disableNav=YES&status_bar_transparent=true&custom_content_source=a2113w.42000075"
                                data-spm="d5"
                                style={{
                                  backgroundImage:
                                    'url("https://img.alicdn.com/imgextra/i4/O1CN013YccH91yOernl6nPb_!!6000000006569-2-tps-1040-384.png")',
                                  height: 158,
                                }}
                              >
                                <div
                                  className="home-ad-banner-item-content-container"
                                  style={{ color: "rgb(255, 255, 255)" }}
                                >
                                  <img
                                    src="https://img.alicdn.com/imgextra/i1/O1CN01YakTJw1CucxKa8KAq_!!6000000000141-2-tps-260-64.png"
                                    className="home-ad-banner-item-logo"
                                    height={16}
                                  />
                                  <div className="home-ad-banner-item-title-top">
                                    家享生活
                                  </div>
                                  <div className="home-ad-banner-item-title-middle">
                                    叠加国补低至6折
                                  </div>
                                  <div className="home-ad-banner-item-subtitle">
                                    家享好物爆款直降
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div
                          data-index={5}
                          tabIndex={-1}
                          className="slick-slide slick-cloned"
                          aria-hidden="true"
                          style={{ width: 273 }}
                        >
                          <div>
                            <div
                              tabIndex={-1}
                              style={{ width: "100%", display: "inline-block" }}
                            >
                              <a
                                className="home-ad-banner-item"
                                href="https://huodong.taobao.com/wow/a/act/tao/dailygroup/23509/24308/wupr?spm=2c32bd2e.711942f7.0.0.3fa366d3luybJq&wh_pid=daily-579340&disableNav=YES&status_bar_transparent=true&custom_content_source=a2113w.42000259"
                                data-spm="d1"
                                style={{
                                  backgroundImage:
                                    'url("https://img.alicdn.com/imgextra/i2/O1CN01NtokqT28uqreleGuJ_!!6000000007993-1-tps-1040-384.gif")',
                                  height: 158,
                                }}
                              >
                                <div
                                  className="home-ad-banner-item-content-container"
                                  style={{ color: "rgb(255, 255, 255)" }}
                                >
                                  <img
                                    src="https://img.alicdn.com/imgextra/i1/O1CN01cSiV4Y1n3AVfIslHC_!!6000000005033-2-tps-140-32.png"
                                    className="home-ad-banner-item-logo"
                                    height={16}
                                  />
                                  <div className="home-ad-banner-item-title-top">
                                    双旦爆款不只5折
                                  </div>
                                  <div className="home-ad-banner-item-title-middle">
                                    券后低至7.7折起{" "}
                                  </div>
                                  <div className="home-ad-banner-item-subtitle">
                                    官方立减,8.8折起
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div
                          data-index={6}
                          tabIndex={-1}
                          className="slick-slide slick-cloned"
                          aria-hidden="true"
                          style={{ width: 273 }}
                        >
                          <div>
                            <div
                              tabIndex={-1}
                              style={{ width: "100%", display: "inline-block" }}
                            >
                              <a
                                className="home-ad-banner-item"
                                href="https://huodong.taobao.com/wow/a/act/tao/dailygroup/23509/24308/wupr?wh_pid=daily-561441&disableNav=YES&status_bar_transparent=true&custom_content_source=a2113w.30046077"
                                data-spm="d2"
                                style={{
                                  backgroundImage:
                                    'url("https://img.alicdn.com/imgextra/i4/O1CN01mRIt401i1jBXGM6u1_!!6000000004353-2-tps-1040-384.png")',
                                  height: 158,
                                }}
                              >
                                <div
                                  className="home-ad-banner-item-content-container"
                                  style={{ color: "rgb(255, 255, 255)" }}
                                >
                                  <img
                                    src="https://img.alicdn.com/imgextra/i2/O1CN01Rfs0Ak25d2c6VyT45_!!6000000007548-2-tps-260-64.png"
                                    className="home-ad-banner-item-logo"
                                    height={16}
                                  />
                                  <div className="home-ad-banner-item-title-top">
                                    抢官方补贴{" "}
                                  </div>
                                  <div className="home-ad-banner-item-title-middle">
                                    来领券中心{" "}
                                  </div>
                                  <div className="home-ad-banner-item-subtitle">
                                    领大额消费券
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div
                          data-index={7}
                          tabIndex={-1}
                          className="slick-slide slick-cloned"
                          aria-hidden="true"
                          style={{ width: 273 }}
                        >
                          <div>
                            <div
                              tabIndex={-1}
                              style={{ width: "100%", display: "inline-block" }}
                            >
                              <a
                                className="home-ad-banner-item"
                                href="https://huodong.taobao.com/wow/a/act/tao/dailygroup/23509/24308/wupr?wh_pid=daily-579110&disableNav=YES&status_bar_transparent=true&custom_content_source=a2113w.41276631"
                                data-spm="d3"
                                style={{
                                  backgroundImage:
                                    'url("https://img.alicdn.com/imgextra/i2/O1CN01DuZxyJ23qfAADxGsx_!!6000000007307-2-tps-1040-384.png")',
                                  height: 158,
                                }}
                              >
                                <div
                                  className="home-ad-banner-item-content-container"
                                  style={{ color: "rgb(255, 255, 255)" }}
                                >
                                  <img
                                    src="https://img.alicdn.com/imgextra/i2/O1CN01Rfs0Ak25d2c6VyT45_!!6000000007548-2-tps-260-64.png"
                                    className="home-ad-banner-item-logo"
                                    height={16}
                                  />
                                  <div className="home-ad-banner-item-title-top">
                                    双旦礼遇清单{" "}
                                  </div>
                                  <div className="home-ad-banner-item-title-middle">
                                    跟买不出错{" "}
                                  </div>
                                  <div className="home-ad-banner-item-subtitle">
                                    官方立减好货8.8折起
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div
                          data-index={8}
                          tabIndex={-1}
                          className="slick-slide slick-cloned"
                          aria-hidden="true"
                          style={{ width: 273 }}
                        >
                          <div>
                            <div
                              tabIndex={-1}
                              style={{ width: "100%", display: "inline-block" }}
                            >
                              <a
                                className="home-ad-banner-item"
                                href="https://huodong.taobao.com/wow/a/act/tao/dailygroup/23509/24308/wupr?wh_pid=daily-579092&disableNav=YES&status_bar_transparent=true&custom_content_source=a2113w.41255816"
                                data-spm="d4"
                                style={{
                                  backgroundImage:
                                    'url("https://img.alicdn.com/imgextra/i2/O1CN01rHTJwP1s3h2fs2G01_!!6000000005711-2-tps-1040-384.png")',
                                  height: 158,
                                }}
                              >
                                <div
                                  className="home-ad-banner-item-content-container"
                                  style={{ color: "rgb(255, 255, 255)" }}
                                >
                                  <img
                                    src="https://img.alicdn.com/imgextra/i2/O1CN01Rfs0Ak25d2c6VyT45_!!6000000007548-2-tps-260-64.png"
                                    className="home-ad-banner-item-logo"
                                    height={16}
                                  />
                                  <div className="home-ad-banner-item-title-top">
                                    潮电数码
                                  </div>
                                  <div className="home-ad-banner-item-title-middle">
                                    抢24期免息
                                  </div>
                                  <div className="home-ad-banner-item-subtitle">
                                    国补好物至高20%OFF
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div
                          data-index={9}
                          tabIndex={-1}
                          className="slick-slide slick-cloned"
                          aria-hidden="true"
                          style={{ width: 273 }}
                        >
                          <div>
                            <div
                              tabIndex={-1}
                              style={{ width: "100%", display: "inline-block" }}
                            >
                              <a
                                className="home-ad-banner-item"
                                href="https://huodong.taobao.com/wow/a/act/tao/dailygroup/23509/24308/wupr?wh_pid=daily-579337&disableNav=YES&status_bar_transparent=true&custom_content_source=a2113w.42000075"
                                data-spm="d5"
                                style={{
                                  backgroundImage:
                                    'url("https://img.alicdn.com/imgextra/i4/O1CN013YccH91yOernl6nPb_!!6000000006569-2-tps-1040-384.png")',
                                  height: 158,
                                }}
                              >
                                <div
                                  className="home-ad-banner-item-content-container"
                                  style={{ color: "rgb(255, 255, 255)" }}
                                >
                                  <img
                                    src="https://img.alicdn.com/imgextra/i1/O1CN01YakTJw1CucxKa8KAq_!!6000000000141-2-tps-260-64.png"
                                    className="home-ad-banner-item-logo"
                                    height={16}
                                  />
                                  <div className="home-ad-banner-item-title-top">
                                    家享生活
                                  </div>
                                  <div className="home-ad-banner-item-title-middle">
                                    叠加国补低至6折
                                  </div>
                                  <div className="home-ad-banner-item-subtitle">
                                    家享好物爆款直降
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      data-role="none"
                      className="slick-arrow slick-next"
                      data-spm-anchor-id="a21bo.jianhua/a.banner.i0.5af91affEZoGtc"
                      style={{ display: "block" }}
                    >
                      {" "}
                      Next
                    </button>
                    <ul className="slick-dots" style={{ display: "block" }}>
                      <li className="slick-active">
                        <button>1</button>
                      </li>
                      <li className="">
                        <button>2</button>
                      </li>
                      <li className="">
                        <button>3</button>
                      </li>
                      <li className="">
                        <button>4</button>
                      </li>
                      <li className="">
                        <button>5</button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div> */}
              <div className="tbpc-col tbpc-col-30 business-entry-col tbpc-col tbpc-col-horizon-8 business-entry-col">
                <div
                  className="business-entry-item-card"
                  data-spm="yingxiao"
                  style={{ backgroundColor: "rgb(247, 247, 247)" }}
                >
                  <div
                    className="business-entry-title-card-top"
                    href="#"
                    data-spm="d1"
                  >
                    <div className="business-entry-title-card-top-image" />
                  </div>
                  <div className="business-entry-item-card-content-container">
                    <a
                      className="business-entry-item-card-content"
                      href="/categories/furniture"
                      target="_blank"
                      data-spm="d1_1"
                      style={{ marginLeft: 0 }}
                    >
                      <div className="business-entry-item-card-content-container-image">
                        <img src="https://img.alicdn.com/bao/upload/O1CN01t2MfWo1fHoBJ52wED_!!6000000003982-2-yinhe.png_360x360q90.jpg" />
                        <div className="business-entry-item-card-content-container-image-mask" />
                      </div>
                      <div
                        className="business-entry-item-card-content-coin"
                        style={{ marginTop: 8, bottom: 0 }}
                      >
                        <span className="business-entry-item-card-content-coin-title">
                          $
                        </span>
                        <span>4419.15</span>
                      </div>
                      <div className="business-entry-item-card-content-reduction">
                        已补1400元
                      </div>
                    </a>
                    <a
                      className="business-entry-item-card-content"
                      href="/categories/automotive"
                      target="_blank"
                      data-spm="d1_2"
                      style={{ marginLeft: 8 }}
                    >
                      <div className="business-entry-item-card-content-container-image">
                        <img src="https://img.alicdn.com/bao/upload/O1CN01nysjMP1w2YTFnrQeg_!!6000000006250-2-yinhe.png_360x360q90.jpg" />
                        <div className="business-entry-item-card-content-container-image-mask" />
                      </div>
                      <div
                        className="business-entry-item-card-content-coin"
                        style={{ marginTop: 8, bottom: 0 }}
                      >
                        <span className="business-entry-item-card-content-coin-title">
                          $
                        </span>
                        <span>2920</span>
                      </div>
                      <div className="business-entry-item-card-content-reduction">
                        3150人已抢
                      </div>
                    </a>
                    <a
                      className="business-entry-item-card-content"
                      href="/categories/automotive"
                      target="_blank"
                      data-spm="d1_3"
                      style={{ marginLeft: 8 }}
                    >
                      <div className="business-entry-item-card-content-container-image">
                        <img src="https://img.alicdn.com/bao/upload/O1CN01d1vv2O1cxXTgGYL51_!!6000000003667-2-yinhe.png_360x360q90.jpg" />
                        <div className="business-entry-item-card-content-container-image-mask" />
                      </div>
                      <div
                        className="business-entry-item-card-content-coin"
                        style={{ marginTop: 8, bottom: 0 }}
                      >
                        <span className="business-entry-item-card-content-coin-title">
                          ¥
                        </span>
                        <span>2794</span>
                      </div>
                      <div className="business-entry-item-card-content-reduction">
                        已补5元
                      </div>
                    </a>
                    <a
                      className="business-entry-item-card-content"
                      href="#"
                      target="_blank"
                      data-spm="d1_4"
                      style={{ marginLeft: 8 }}
                    >
                      <div className="business-entry-item-card-content-container-image">
                        <img src="https://img.alicdn.com/bao/upload/O1CN01wEe1r324lRsNL8zta_!!6000000007431-2-yinhe.png_360x360q90.jpg" />
                        <div className="business-entry-item-card-content-container-image-mask" />
                      </div>
                      <div
                        className="business-entry-item-card-content-coin"
                        style={{ marginTop: 8, bottom: 0 }}
                      >
                        <span className="business-entry-item-card-content-coin-title">
                          ¥
                        </span>
                        <span>1228.58</span>
                      </div>
                      <div className="business-entry-item-card-content-reduction">
                        已补618元
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tbpc-row row-base"
              style={{
                marginLeft: "-8px",
                marginRight: "-8px",
                maxWidth: 1616,
              }}
            >
              <div className="tbpc-col tbpc-col-15 business-entry-col tbpc-col tbpc-col-horizon-8 business-entry-col">
                <div
                  className="business-entry-bbs-card"
                  data-spm="yingxiao"
                  style={{ backgroundColor: "rgb(247, 247, 247)" }}
                >
                  {/* <a
                    className="business-entry-title-card-top"
                    href="https://jianghu.taobao.com/"
                    target="_blank"
                    data-spm="d2"
                  >
                    <div className="business-entry-title-card-top-title-container">
                      <div className="business-entry-title-card-top-title-rtl">
                        <div
                          className="business-entry-title-card-top-title"
                          style={{
                            color: "var(--tbpc-primary-color, #1f1f1f)",
                          }}
                        >
                          淘江湖
                        </div>
                      </div>
                      <div className="business-entry-title-card-top-title-tag">
                        <img
                          src="https://gw.alicdn.com/imgextra/i4/O1CN01MLsxSV1OtxfW7puDl_!!6000000001764-2-tps-192-64.png"
                          alt=""
                          height={14}
                        />
                      </div>
                    </div>
                    <div className="business-entry-title-card-top-image" />
                  </a> */}
                  {/* <div className="bbs-entry-bbs-wrapper source-pc">
                    <a
                      className="bbs-entry-bbs-card-content bbs-entry-bbs-card-content-0"
                      href="https://jianghu.taobao.com/detail/47301_59013069"
                      target="_blank"
                      data-spm="d2_1"
                    >
                      <img
                        className="bbs-entry-bbs-card-content-pic"
                        src="https://gw.alicdn.com/imgextra/i3/O1CN01OuSAqg1Uh2HsAREAa_!!6000000002548-1-tps-200-200.gif"
                      />
                      <div
                        className="bbs-entry-bbs-card-content-desc"
                        title="2025年度热梗评选，哪个梗陪你走过了这一年？"
                        style={{
                          width: "calc(70% - 8px)",
                          minWidth: "calc(100% - 74px)",
                          maxWidth: "calc(100% - 41px)",
                        }}
                      >
                        2025年度热梗评选，哪个梗陪你走过了这一年？
                      </div>
                    </a>
                    <a
                      className="bbs-entry-bbs-card-content bbs-entry-bbs-card-content-1"
                      href="https://jianghu.taobao.com/detail/47301_55724597"
                      target="_blank"
                      data-spm="d2_2"
                    >
                      <img
                        className="bbs-entry-bbs-card-content-pic"
                        src="https://gw.alicdn.com/imgextra/i4/O1CN01Nvu13o1EFWdlCbOT8_!!6000000000322-1-tps-200-200.gif"
                      />
                      <div
                        className="bbs-entry-bbs-card-content-desc"
                        title="实用工具网址推荐第一期之打工人必备办公神器"
                        style={{
                          width: "calc(70% - 8px)",
                          minWidth: "calc(100% - 74px)",
                          maxWidth: "calc(100% - 41px)",
                        }}
                      >
                        实用工具网址推荐第一期之打工人必备办公神器
                      </div>
                    </a>
                    <a
                      className="bbs-entry-bbs-card-content2"
                      href="https://chat.jianghu.taobao.com/chat/66666"
                      target="_blank"
                      data-spm="d2_3"
                    >
                      <img
                        className="bbs-entry-bbs-card-content-icon"
                        src="https://gw.alicdn.com/imgextra/i3/O1CN01MoUZFs1pMWRI5ZEha_!!6000000005346-2-tps-80-80.png"
                      />
                      <div
                        className="bbs-entry-bbs-card-content-desc"
                        title="淘宝网聊天室-全国网友实时在线聊天"
                        style={{ width: "calc(100% - 24px)" }}
                      >
                        淘宝网聊天室-全国网友实时在线聊天
                      </div>
                    </a>
                  </div> */}
                </div>
              </div>
              <div className="tbpc-col tbpc-col-15 business-entry-col tbpc-col tbpc-col-horizon-8 business-entry-col">
                <div
                  className="business-entry-item-card"
                  data-spm="yingxiao"
                  style={{ backgroundColor: "rgb(247, 247, 247)" }}
                >
                  <a
                    className="business-entry-title-card-top"
                    href="/categories/laptops"
                    target="_blank"
                    data-spm="d3"
                  >
                    <div className="business-entry-title-card-top-title-container">
                      <div className="business-entry-title-card-top-title-rtl">
                        <div
                          className="business-entry-title-card-top-title"
                          style={{
                            color: "var(--tbpc-primary-color, #1f1f1f)",
                          }}
                        ></div>
                      </div>
                    </div>
                    <div className="business-entry-title-card-top-image" />
                  </a>
                  <div className="business-entry-item-card-content-container">
                    <a
                      className="business-entry-item-card-content"
                      href="/categories/laptops"
                      target="_blank"
                      data-spm="d3_1"
                      style={{ marginLeft: 0 }}
                    >
                      <div className="business-entry-item-card-content-container-image">
                        <img src="https://img.alicdn.com/bao/upload/O1CN01PmAr4G1hzRB2R1WLw_!!6000000004348-0-yinhe.jpg_360x360q90.jpg" />
                        <div className="business-entry-item-card-content-container-image-mask" />
                      </div>
                      <div
                        className="business-entry-item-card-content-coin"
                        style={{ marginTop: 8, bottom: 0 }}
                      >
                        <span className="business-entry-item-card-content-coin-title">
                          $
                        </span>
                        <span>9119.05</span>
                      </div>
                    </a>
                    <a
                      className="business-entry-item-card-content"
                      href="https://huodong.taobao.com/wow/a/act/tao/dailygroup/23509/24308/wupr?wh_pid=daily-557610&disableNav=YES&status_bar_transparent=true&itemId=802967825905%2C904615190262&itemIds=802967825905%2C904615190262&custom_content_source=a2113w.29950182"
                      target="_blank"
                      data-spm="d3_2"
                      style={{ marginLeft: 8 }}
                    >
                      <div className="business-entry-item-card-content-container-image">
                        <img src="https://img.alicdn.com/bao/upload/O1CN01TPohgI1lk6LYlU9II_!!6000000004856-0-yinhe.jpg_360x360q90.jpg" />
                        <div className="business-entry-item-card-content-container-image-mask" />
                      </div>
                      <div
                        className="business-entry-item-card-content-coin"
                        style={{ marginTop: 8, bottom: 0 }}
                      >
                        <span className="business-entry-item-card-content-coin-title">
                          ¥
                        </span>
                        <span>7249</span>
                      </div>
                      <div className="business-entry-item-card-content-reduction">
                        官方立减12%
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="tbpc-col tbpc-col-15 business-entry-col tbpc-col tbpc-col-horizon-8 business-entry-col">
                <div
                  className="business-entry-item-card"
                  data-spm="yingxiao"
                  style={{ backgroundColor: "rgb(247, 247, 247)" }}
                >
                  <a
                    className="business-entry-title-card-top"
                    href="/categories/laptops"
                    target="_blank"
                    data-spm="d4"
                  >
                    <div className="business-entry-title-card-top-title-container">
                      <div className="business-entry-title-card-top-title-rtl">
                        <div
                          className="business-entry-title-card-top-title"
                          style={{ color: "rgb(41, 189, 0)" }}
                        ></div>
                        <div className="business-entry-title-card-top-title-tag-left"></div>
                      </div>
                    </div>
                    <div className="business-entry-title-card-top-image" />
                  </a>
                  <div className="business-entry-item-card-content-container">
                    <a
                      className="business-entry-item-card-content"
                      href="/categories/laptops"
                      target="_blank"
                      data-spm="d4_1"
                      style={{ marginLeft: 0 }}
                    >
                      <div className="business-entry-item-card-content-container-image">
                        <img src="https://img.alicdn.com/bao/upload/O1CN0162RycS1tTd5VLehLV_!!6000000005903-2-yinhe.png_360x360q90.jpg" />
                        <div className="business-entry-item-card-content-container-image-mask" />
                      </div>
                      <div
                        className="business-entry-item-card-content-coin"
                        style={{ marginTop: 8, bottom: 0 }}
                      >
                        <span className="business-entry-item-card-content-coin-title">
                          $
                        </span>
                        <span>2975.04</span>
                      </div>
                    </a>
                    <a
                      className="business-entry-item-card-content"
                      href="https://huodong.taobao.com/wow/z/tbhome/tbpc-venue/gov-subsidy?itemId=624594525059%2C725321833196&itemIds=624594525059%2C725321833196&custom_content_source=gov-subsidy-app.home-pcall"
                      target="_blank"
                      data-spm="d4_2"
                      style={{ marginLeft: 8 }}
                    >
                      <div className="business-entry-item-card-content-container-image">
                        <img src="https://img.alicdn.com/bao/upload/O1CN01P4O0AI1aJ75xf9GpD_!!6000000003308-0-yinhe.jpg_360x360q90.jpg" />
                        <div className="business-entry-item-card-content-container-image-mask" />
                      </div>
                      <div
                        className="business-entry-item-card-content-coin"
                        style={{ marginTop: 8, bottom: 0 }}
                      >
                        <span className="business-entry-item-card-content-coin-title">
                          ¥
                        </span>
                        <span>194.65</span>
                      </div>
                      <div className="business-entry-item-card-content-reduction">
                        <span>已降174.35元</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="tbpc-col tbpc-col-15 business-entry-col tbpc-col tbpc-col-horizon-8 business-entry-col">
                <div
                  className="business-entry-item-card"
                  data-spm="yingxiao"
                  style={{ backgroundColor: "rgb(247, 247, 247)" }}
                >
                  <a
                    className="business-entry-title-card-top"
                    href="/categories/furniture "
                    target="_blank"
                    data-spm="d5"
                  >
                    <div className="business-entry-title-card-top-title-container">
                      <div className="business-entry-title-card-top-title-rtl">
                        <div
                          className="business-entry-title-card-top-title"
                          style={{
                            color: "var(--tbpc-primary-color, #1f1f1f)",
                          }}
                        ></div>
                      </div>
                      <div className="business-entry-title-card-top-title-tag"></div>
                    </div>
                    <div className="business-entry-title-card-top-image" />
                  </a>
                  <div className="business-entry-item-card-content-container">
                    <a
                      className="business-entry-item-card-content"
                      href="/categories/furniture"
                      target="_blank"
                      data-spm="d5_1"
                      style={{ marginLeft: 0 }}
                    >
                      <div className="business-entry-item-card-content-container-image">
                        <img src="https://img.alicdn.com/bao/upload/O1CN01YFxG7s29jEINf2DCg_!!6000000008103-2-yinhe.png_360x360q90.jpg" />
                        <div className="business-entry-item-card-content-container-image-mask" />
                      </div>
                      <div
                        className="business-entry-item-card-content-coin"
                        style={{ marginTop: 8, bottom: 0 }}
                      >
                        <span className="business-entry-item-card-content-coin-title">
                          $
                        </span>
                        <span>636.65</span>
                      </div>
                    </a>
                    <a
                      className="business-entry-item-card-content"
                      href="https://web.m.taobao.com/app/ltao-fe/tbmx-pc-page/home?spmb=tbmspcnew&itemId=820853769196%2C827198066713&itemIds=820853769196%2C827198066713&custom_content_source=mspd.tbmspcnew"
                      target="_blank"
                      data-spm="d5_2"
                      style={{ marginLeft: 8 }}
                    >
                      <div className="business-entry-item-card-content-container-image">
                        <img src="https://img.alicdn.com/bao/upload/O1CN01L54ogy27Bg6VSAg6t_!!6000000007759-2-yinhe.png_360x360q90.jpg" />
                        <div className="business-entry-item-card-content-container-image-mask" />
                      </div>
                      <div
                        className="business-entry-item-card-content-coin"
                        style={{ marginTop: 8, bottom: 0 }}
                      >
                        <span className="business-entry-item-card-content-coin-title">
                          ¥
                        </span>
                        <span>679.03</span>
                      </div>
                      <div className="business-entry-item-card-content-reduction">
                        官方立减12%
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-right" role="complementary">
          <div className="tbh-user J_Module" data-spm="user">
            <div className="user">
              <div
                className="J_UserMemberWrap member-bd member-bd-horiz"
                data-spm="profile"
              >
                <div className="avatar-wrapper avatar-wrapper-order">
                  <a
                    className="J_UserMemberHome member-home"
                    href="#"
                    target="_self"
                    style={{ cursor: "default" }}
                  >
                    <div
                      className="J_UserMemberAvatar member-avatar member-avatar-order"
                      style={{
                        backgroundImage: 'url("")',
                      }}
                    />
                  </a>
                </div>
                <a
                  className="J_UserMemberNickUrl member-nickurl member-nickurl-order"
                  href="#"
                  target="_self"
                >
                  <span className="member-nick-info member-nick-info-order">
                    <strong className="J_UserMemberNick member-nick member-nick-order" />
                  </span>
                </a>
                <a
                  className="J_UserMemberNickUrl member-nickurl-horiz"
                  href={user ? "/account/manage" : "#"}
                  target="_self"
                >
                  <span className="member-nick-info member-nick-info-order">
                    <strong className="J_UserMemberHello member-hello">
                      {user ? `${user.fullName}!` : `Good ${partOfDay}`}
                    </strong>
                  </span>
                </a>
                <div className="member-login-btn-container">
                  {user ? (
                    <LogoutButton className="btn-register" />
                  ) : (
                    <a href="./signup" className="btn-register">
                      Register
                    </a>
                  )}

                  <span className="divider" />
                  {user && user.isSeller ? (
                    <a
                      href="http://localhost:3001/admin/dashboard"
                      className="btn-open"
                    >
                      Store
                    </a>
                  ) : (
                    <a href="/store-setup" className="btn-open">
                      Store setup
                    </a>
                  )}
                </div>
              </div>
              {user ? (
                <div className="member-ft member-ft-order">
                  <div
                    className="member-logout J_UserMemberLogout"
                    style={{ display: "block" }}
                  ></div>
                </div>
              ) : (
                <div className="member-ft member-ft-order">
                  <div
                    className="member-logout J_UserMemberLogout"
                    style={{ display: "block" }}
                  >
                    <div className="login-guide-title">
                      Log in to Baotao for more.
                    </div>
                    <div className="login-guide-desc">
                      Better recommendations and easier search.
                    </div>
                    <a href="/login" className="btn-login ml1 tb-bg weight">
                      Login
                    </a>
                  </div>
                </div>
              )}
            </div>
            <div className="user-mytao" data-spm="function">
              <div className="mytao-content">
                <a href="#" className="mytao-collectitem">
                  <span className="tb-ifont mytao-icon"></span>
                  <p>Favourites</p>
                </a>
              </div>
              <div className="mytao-content">
                <a href="/orders/bought" className="mytao-collectitem">
                  <span className="tb-ifont mytao-icon"></span>
                  <p>Bought</p>
                </a>
              </div>
              <div className="mytao-content">
                <a href="#" className="mytao-collectitem">
                  <span className="tb-ifont mytao-icon"></span>
                  <p>Followings</p>
                </a>
              </div>
              <div className="mytao-content">
                <a href="/orders" className="mytao-collectitem">
                  <span className="tb-ifont mytao-icon"></span>
                  <p>Orders</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
