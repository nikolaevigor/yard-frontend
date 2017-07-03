// @flow

import React from 'react';
import styled from 'styled-components';
import { Grid } from 'react-flexbox-grid';

import Title from './Title';
import Line from './SeparationLine';

const Description = styled.div`
  margin-top: 3rem;
`;

const Wrapper = styled.div`
  display: flex;
`;

const Text = styled.article`
  white-space: pre-line;
  text-indent: 0;
  font-family: "Fira Sans", sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5rem;
  margin-left: 91px;
  margin-bottom: 1.5rem;
  color: #3e4247;
`;

const Paragraph = styled.p`
  &:first-child {
    margin-top: 0;
  }
`;

export default () =>
  (<Description>
    <Grid>
      <Wrapper>
        <Title>Описание</Title>
        <Text>
          <Paragraph>
            ВТБ Арена Парк — современный квартал в 10 минутах езды от Кремля. Территория разделена
            на три зоны: жилой
            район, центральный стадион «Динамо» и большой спортивный парк.
          </Paragraph>
          <Paragraph>
            Жилой район — это 13 корпусов: апартаменты, штаб-квартира «Динамо», отель «Hyatt
            Regency Moscow» и четыре
            современных бизнес-центра. На территории — рестораны, спа-комплекс, фитнес-центр,
            химчистка, аптеки,
            магазины и отделения банков. В каждом корпусе работает консьерж и круглосуточная
            охрана. Для жителей
            оборудованы технические помещения под хранение колясок и велосипедов, комнаты для
            домашних животных и
            уютные
            вестибюли с мягкими креслами для встреч с друзьями и соседями.
          </Paragraph>
          <Paragraph>
            Сердце ВТБ Арена Парк — стадион. Под одной крышей расположились музей,
            торгово-развлекательный комплекс,
            подземная парковка для гостей и две крупные спортивные арены. Жизнь квартала
            сосредоточена в этой зоне:
            здесь можно сходить на концерт или фестиваль, поболеть за любимую команду и купить
            новую рубашку в
            торговом
            комплексе.
          </Paragraph>
          <Paragraph>
            Тихий жилой район от шумного стадиона отделяет Парк Физкультуры и Отдыха. Здесь каждый
            найдет занятие: для
            детей оборудованы игровые зоны, для подростков — спортивные площадки на открытом
            воздухе, для взрослых —
            велосипедные дорожки и зоны отдыха, где можно подышать свежим воздухом во время
            рабочего перерыва.
          </Paragraph>
        </Text>
      </Wrapper>
      <Line />
    </Grid>
  </Description>);
