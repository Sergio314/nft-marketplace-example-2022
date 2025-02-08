import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from '@mui/material';
import React from 'react';
import { faqData } from '../data';
import { QuestionAndAnswersTypes } from '../types';
import styles from './styles.module.scss';
import { Wrapper } from '@/core/components/Wrapper';
import ArrowSvg from '@/resources/icons/arrow.svg';

export const FaqSection = (): JSX.Element => {
  return (
    <Wrapper>
      <Box className={styles.faqSection}>
        <Box className={styles.faqSection__wrapper}>
          <h3 className={styles.faqSection__title}>
            Frequently Asked Questions
          </h3>
        </Box>
        <Box className={styles.faqSection__accordions}>
          {faqData.map((qa: QuestionAndAnswersTypes, index) => (
            <Accordion key={index} className={styles.faqSection__accordion}>
              <AccordionSummary
                expandIcon={
                  <ArrowSvg className={styles.faqSection__accordion__arrow} />
                }
              >
                <Typography className={styles.faqSection__accordion__summary}>
                  {qa.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className={styles.faqSection__accordion__details}>
                  {qa.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Box>
    </Wrapper>
  );
};
