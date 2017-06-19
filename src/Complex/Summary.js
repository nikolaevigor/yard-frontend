import React from 'react'
import styled from 'styled-components'
import { Grid, Row, Col } from 'react-flexbox-grid';

const Summary = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const SummaryHeading = styled.h2`
  display: block;
  margin: 24px 0 24px 48px;
  font-family: "Philosopher";
  font-size: 24px;
  font-weight: 700;
  line-height: 1.12;
  color: #3e4247;

  &:first-child {
    margin-left: 0;
  }
`;

const SummarySmall = styled.small`
  display: block;
  font-family: "Fira Sans", sans-serif;
  font-size: 14px;
  font-weight: 300;
  line-height: 1.57;
  color: #a9afb6;
  margin-top: 10px;
`;

export default () => {
  return (
    <Summary>
      <SummaryHeading>
        950
        <SummarySmall>
          предложений
        </SummarySmall>
      </SummaryHeading>
      <SummaryHeading>
        John McAslan + Partners
        <SummarySmall>
          архитектор
        </SummarySmall>
      </SummaryHeading>
      <SummaryHeading>
        Группа «ПСН»
        <SummarySmall>
          застройщик
        </SummarySmall>
      </SummaryHeading>
    </Summary>
  );
};
