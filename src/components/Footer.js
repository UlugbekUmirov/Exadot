import styled from "styled-components";
const Title = styled.div`
  .footer {
    background: #2a2941;
    padding: 60px 0px;
    position: relative;
  }
  .footer_container {
    display: flex;
    justify-content: space-between;

    padding-right: 10px;
    padding-left: 10px;
  }
  .footer-img {
    position: absolute;
    bottom: 0;
    left: 0;
  }
  .left {
    color: #b8b8b8;
  }
  .right {
  }
  p {
    margin: 0;
  }
  .right-title {
    font-size: 24px;
    width: 65%;
  }
  .left p {
    font-weight: 450;
    font-size: 16px;
    line-height: 26px;
    margin-bottom: 16px;
  }
  .locatsiya {
    width: 100%;
  }
  .social img {
    margin-right: 16px;
    padding: 6px;
    background-color: #434569;
    border-radius: 50%;
  }

  @media (max-width: 1000px) {
    .footer_container {
      display: block;
      padding-right: 10px;
      padding-left: 10px;
    }
  }
  @media (max-width: 768px) {
    .right-title {
      font-size: 24px;
      width: 90%;
    }
  }
  @media (max-width: 576px) {
    .footer_container {
      padding-right: 10px;
      padding-left: 10px;
    }
  }
`;

export default function Footer() {
  return (
    <Title>
      <div className="footer">
        <div className="container">
          <div className=" footer_container">
            <div className="right">
              <p
                style={{
                  color: "#B8B8B8",
                  fontSize: "16px",
                  fontWeight: "500",
                }}
              >
                Ближайшие события:
              </p>
              <p
                style={{
                  color: "#FFC34E",
                  fontWeight: "500",
                  fontSize: "64px",
                  margin: "16px 0px",
                  fontFamily: "Spoff",
                }}
              >
                24.10
              </p>
              <p
                style={{
                  color: "#B8B8B8",
                  fontSize: "20px",
                  fontWeight: "500",
                  marginBottom: "4px",
                }}
              >
                19:00 - 21:00
              </p>
              <p
                className="right-title"
                style={{
                  color: "white",
                  fontWeight: "600",
                  marginBottom: "20px",
                }}
              >
                Бесплатная лекция «Как опытному менеджеру «заделиверить» проект
                в срок?»
              </p>
            </div>
            <div className="left">
              <img src="/logo footer.svg" alt="" />
              <div style={{ margin: "24px 0px" }}>
                <p>Exadot LLC</p>
                <p>
                  <a href="tel:+12158162097" style={{ color: " #B8B8B8" }}>
                    +12158162097
                  </a>
                </p>
                <p className="locatsiya">
                  Philadelphia,Nester Pl, APT 15, 1900
                </p>
                <p>info.exadot@gmail.com</p>
                <div className="social">
                  <a href="/">
                   
                    <img src="/instagram.svg" alt="" />
                  </a>
                  <a href="/">
                   
                    <img src="/facebook.svg" alt="" />
                  </a>
                  <a href="/">
                   
                    <img src="/twitter.svg" alt="" />
                  </a>
                  <a href="/">
                   
                    <img src="/linkedin.svg" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div style={{ color: "#B8B8B8" }}>
            © {new Date().getFullYear()} Exadot LLC. All rights reserved
          </div>
          <img className="footer-img" src="/footer_bottom.svg" alt="" />
        </div>
      </div>
    </Title>
  );
}
