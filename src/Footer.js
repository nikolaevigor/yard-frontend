import React from 'react'
import styled from 'styled-components'
import { Grid, Row, Col } from 'react-flexbox-grid';
import ArrowImage from './img/arrow.svg'

const Footer = styled.footer`
  padding-top: 32px;
  padding-bottom: 28px;
  background-color: #111;
`;

const FooterLine = styled.hr`
  height: 2px;
  border-style: none;
  background-color: #3e4247;
  margin: 0;
`;

const FooterTitle = styled.h4`
  text-align: left;
  font-family: "Fira Sans", sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #646971;
  margin-top: 16px;
  margin-bottom: 0;
  line-height: 1.6;
`;

const FooterCredentialsTitle = FooterTitle.extend`
  margin: 0;
  line-height: 1.6;
`;

// const FooterCredentials:last-child = styled.p`
//   margin-top: 16px;
// `

const FooterLink = styled.a`
  display: block;
  text-align: left;
  font-family: "Fira Sans", sans-serif;
  font-weight: 300;
  font-size: 14px;
  line-height: 1.6;
  color: #fff;
  text-decoration: none;
  margin-top: 8px;
`;

const FooterCredentials = FooterLink.withComponent('p').extend`
  margin-top: 8px;
  margin-bottom: 0;
  line-height: 1.6;
  color: #a9afb6;
`;

const FooterAllApartmentLink = FooterLink.extend`
  margin-top: 16px;
  line-height: 1.6;
`;

const FooterLegal = styled.p`
  text-align: left;
  font-family: "Fira Sans", sans-serif;
  font-weight: 300;
  font-size: 11px;
  line-height: 16px;
  color: #a9afb6;
  margin-top: 96px;
`;

const ArrowImg = styled.img`
  margin-left: 8px;
`

export default () => {
  return (
    <Footer>
    <Grid>
      <Row>
        <Col lg={2}>
          <FooterCredentialsTitle>ООО «Ярд»</FooterCredentialsTitle>
          <FooterCredentials>ОГРН 1175074002531</FooterCredentials>
          <FooterCredentials>ИНН 5036165365</FooterCredentials>
          <FooterCredentials>+7 (999) 821-14-88</FooterCredentials>
        </Col>
        <Col lgOffset={2} lg={2}>
          <FooterLine />
          <FooterTitle>Жилые комплексы</FooterTitle>
          <FooterLink href="#">ВТБ Арена Парк</FooterLink>
          <FooterLink href="#">Садовые кварталы</FooterLink>
          <FooterLink href="#">Резиденция Монэ</FooterLink>
          <FooterAllApartmentLink href="#">
                Все ЖК Москвы
                <ArrowImg src={ArrowImage} alt="Arrow" />
          </FooterAllApartmentLink>
        </Col>
        <Col lg={2}>
          <FooterLine />
          <FooterTitle>Компания</FooterTitle>
          <FooterLink href="#">Команда</FooterLink>
          <FooterLink href="#">О компании</FooterLink>
        </Col>
      </Row>
      <Row>
        <Col lgOffset={4} lg={8}>
          <FooterLegal>Любая информация, представленная на данном сайте, носит исключительно информационный характер и ни при каких условиях не является публичной офертой, определяемой положениями статьи 437 ГК РФ. © ООО «Ярд», 2017</FooterLegal>
        </Col>
      </Row>
    </Grid>
  </Footer>
  )
}
