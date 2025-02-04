import { useState, Fragment, lazy } from "react";
import { Row, Col, Drawer } from "antd";
import { CSSTransition } from "react-transition-group";
import { withTranslation } from "react-i18next";
import {Redirect} from 'react-router-dom';


import * as S from "./styles";
import styled from "styled-components";

const SvgIcon = lazy(() => import("../../common/SvgIcon"));
const Button = lazy(() => import("../../common/Button"));

const Header = ({ t }) => {
  const [isNavVisible] = useState(false);
  const [isSmallScreen] = useState(false);
  const [visible, setVisibility] = useState(false);

  const showDrawer = () => {
    setVisibility(!visible);
  };

  const onClose = () => {
    setVisibility(!visible);
  };

  const MenuItem = () => {
    const scrollTo = (id) => {
      const element = document.getElementById(id);
      element.scrollIntoView({
        behavior: "smooth",
      });
      setVisibility(false);
    };
    return (
      <Fragment>
        <S.CustomNavLinkSmall onClick={() => scrollTo("about")}>
          <S.Span>{t("About")}</S.Span>
        </S.CustomNavLinkSmall>
         <S.CustomNavLinkSmall onClick={() => scrollTo("Evenement")}>
          <S.Span>{t("Event")}</S.Span>
        </S.CustomNavLinkSmall>
        <S.CustomNavLinkSmall onClick={() => scrollTo("Service")}>
          <S.Span>{t("Service")}</S.Span>
        </S.CustomNavLinkSmall>
           <S.CustomNavLinkSmall onClick={() => scrollTo("training")}>
          <S.Span>{t("Training")}</S.Span>
        </S.CustomNavLinkSmall>
        <S.CustomNavLinkSmall onClick={() => scrollTo("Partenariats")}>
          <S.Span>{t("Partenariats")}</S.Span>
        </S.CustomNavLinkSmall>


       <S.CustomNavLinkSmall onClick={() => scrollTo("contact")}>
          <S.Span>{t("contact")}</S.Span>
        </S.CustomNavLinkSmall>
                  <S.CustomNavLinkSmall

 >
           <S.Span> <a href="/login">
                <button type="submit" style={{backgroundColor: '#0275d8',color: 'white', fontSize: '17px',
                    borderRadius: '5px', border: 'none'}}>Login</button>
            </a>
               </S.Span>
                  </S.CustomNavLinkSmall>

      </Fragment>
    );
  };
  return (
    <S.Header>
      <S.Container>
        <Row type="flex" justify="space-between" gutter={20}>
          <S.LogoContainer to="/" aria-label="homepage">
            <SvgIcon src="Metd.jpg" />
          </S.LogoContainer>
          <S.NotHidden>
            <MenuItem />
          </S.NotHidden>
          <S.Burger onClick={showDrawer}>
            <S.Outline />
          </S.Burger>
        </Row>
        <CSSTransition
          in={!isSmallScreen || isNavVisible}
          timeout={350}
          classNames="NavAnimation"
          unmountOnExit
        >
          <Drawer closable={false} visible={visible} onClose={onClose}>
            <Col style={{ marginBottom: "2.5rem" }}>
              <S.Label onClick={onClose}>
                <Col span={12}>
                  <S.Menu>Menu</S.Menu>
                </Col>
                <Col span={12}>
                  <S.Outline padding="true" />
                </Col>
              </S.Label>
            </Col>
            <MenuItem />
          </Drawer>
        </CSSTransition>
      </S.Container>
    </S.Header>
  );
};

export default withTranslation()(Header);
