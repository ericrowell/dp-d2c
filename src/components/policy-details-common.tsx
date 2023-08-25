import React, { useState } from 'react';

type PolicyDetailsProps = {
  reqType: string;
  profile: {
    type: string;
    currencyCode: string;
    anb: number;
  };
  policy: {
    hasDiscount: boolean;
    sumYearlyPremium: number;
    discountedPremium: number;
    discountedYearlyPremium: number;
    guaranteedPayout: number;
    planName: string;
    optDescp: string;
    rider: {
      compoName: string;
    }[];
  };
  isLoading: boolean