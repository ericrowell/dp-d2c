import React, { Component } from 'react';
const cx = require('classnames');

type PolicyDetailsProps = {
  product: any,
};

type PolicyDetailsState = {
  showBenefits: Boolean,
  showRiderBenefits: Boolean,
};
const displayFormatted = (value) => Number(value).toLocaleString(undefined, { maximumFractionDigits: 2 });

class PSPolicyDetails extends Component<PolicyDetailsProps, PolicyDetailsState> {
  constructor(props) {
    super(props);
    this.state = {
      showBenefits: false,
      showRiderBenefits: false,
    };

    this.showBenefits = this.showBenefits.bind(this);
    this.showRiderBenefits = this.showRiderBenefits.bind(this);
  }

  showBenefits() {
    this.setState({
      showBenefits: !this.state.showBenefits,
    });
  }

  discountView(product) {
    return product.hasDiscount ?
      (
        <div className="info discount-info">
          <p className="info-title">Discount</p>
          <span className="price-tag">-${displayFormatted(product.basic.yearlyPremium - product.basic.discountedPremium)} </span>
        </div>
      )
      : null;
  }

  medisaveView(product) {
    return product.isMedisave ?
      (
        <div className="info medisave-info">
          <p className="info-title">Pay by <strong>MediSave</strong></p>
          <span className="price-tag">
            -${product.hasDiscount ? product.basic.payableByDiscountMedisave : product.basic.payableByMedisaveYearly}
          </span>
        </div>
      )
      : null;
  }

  benefitsView(product) {
    const {
      showBenefits,
    } = this.state;

    return showBenefits ?
      (
        <div className="base-more-info">
          <p className="more-info-title">Key Benefits</p>
          <ul className="base-more-info-list">
            {product.summary.details.map(({ text }, dIndex) => (
              <li key={dIndex} dangerouslySetInnerHTML={{ __html: text }} />
            ))}
          </ul>
        </div>
      ) :
      null;
  }

  baseSection() {
    const {
      product,
    } = this.props;

    const {
      showBenefits,
    } = this.state;

    const chevronClass = cx([
      'pull-right collapse-icon glyphicon',
      {
        'glyphicon-chevron-up': showBenefits,
      },
      {
        'glyphicon-chevron-down': !showBenefits,
      },
    ]);

    const discountView = this.discountView(product);
    const medisaveView = this.medisaveView(product);
    const benefitsView = this.benefitsView(product);
    return (
      <div className="section base-section">
        <p className="group-title">
          Base Plan
          <span className={chevronClass} onClick={this.showBenefits} />
        </p>
        <div className="info base-info">
          <p className="info-title"> <span className="pru-highlight">PRU</span>Shield {product.basic.displayName}</p>
          <span className="price-tag">${product.basic.yearlyPremium}</span>
        </div>
        {discountView}
        {medisaveView}
        {benefitsView}
      </div>
    );
  }

  showRiderBenefits() {
    this.setState({
      showRiderBenefits: !this.state.showRiderBenefits,
    });
  }

  riderDiscountView(product, rider) {
    return rider.hasDiscount ?
      (
        <div className="info discount-info">
          <p className="info-title">Discount</p>
          <span className="price-tag">-${displayFormatted(rider.yearlyPremium - rider.discountedPremium)} </span>
        </div>
      )
      : null;
  }

  riderAdditionalInfoView(rider) {
    return rider.additionalInfo ?
      (
        <div className="info extra-info">
          <p className="info-title">
            <span className="mark">{rider.highlightInfo || null}</span>
            {rider.additionalInfo} <sup>*</sup>
          </p>
          <span className="price-tag">_</span>
        </div>
      ) : null;

  }

  riderBenefitsView(product, rider) {
    return this.state.showRiderBenefits ?
      (
        <div className="riders-more-info">
          <p className="more-info-title">Key Benefits</p>
          <ul className="riders-more-info-list">
            {rider.benefits.map(({ text, subText }, dIndex) => (
              <li key={dIndex}>
                <span className="benefit-text" dangerouslySetInnerHTML={{ __html: text }} />
                <span className="benefit-sub-text" dangerouslySetInnerHTML={{ __html: subText }} />
              </li>
            ))}
          </ul>
        </div>
      ) : null;

  }

  riderDetails(product) {
    return product.rider.map(rider => {
      const discountView = this.riderDiscountView(product, rider);
      const benefitsView = this.riderBenefitsView(product, rider);
      const additionalInfoView = this.riderAdditionalInfoView(rider);
      return (
        <div key={rider.displayName}>
          <div className="info rider-info">
            <p className="info-title">
              <span className="pru-highlight">PRU</span>{rider.displayName}
            </p>
            <span className="price-tag">${rider.yearlyPremium}</span>
          </div>
          {discountView}
          {additionalInfoView}
          {benefitsView}
        </div>
      );
    });
  }

  riderSection() {
    const {
      product,
    } = this.props;

    const {
      showRiderBenefits,
    } = this.state;

    const riderDetails = this.riderDetails(product);
    const chevronClass = cx([
      'pull-right collapse-icon glyphicon',
      {
        'glyphicon-chevron-up': showRiderBenefits,
      },
      {
        'glyphicon-chevron-down': !showRiderBenefits,
      },
    ]);
    return product.rider.length > 0 ?
      (
        <div className="section rider-section">
          <p className="group-title">
            Supplementary Plan
            <span className={chevronClass} onClick={this.showRiderBenefits} />
          </p>
          {riderDetails}
        </div>
      ) : null;
  }

  totalSection() {
    const {
      product,
    } = this.props;
    return (
      <div className="section total-section">
        <div className="info total-info">
          <span className="info-title">
            <h4>Total Premium<sup>**</sup></h4>
            {product.isMedisave ? <span className="suffix-text">(without Medisave Payable)</span> : null}
          </span>
          <span className="price-tag">
            <h4>${product.totalYearlyPremium}</h4>
            <span className="suffix-text">per year</span>
          </span>
        </div>
      </div>
    );
  }

  payableSection() {
    const {
      product,
    } = this.props;
    const priceView = (product.hasDiscount  ||
      (product.rider && product.rider.length > 0 && product.rider[0].hasDiscount)) ?
      (
        <span className="price-tag">
          <h4>${product.payableByCreditcardYearlyDiscounted.toFixed(2)}</h4>
          <span className="suffix-text">for first year</span>
        </span>
      ) : (
        <span>
          <h4>${product.payableByCreditcardYearly.toFixed(2)}</h4>
          <span className="suffix-text">per year</span>
        </span>
      );
    return (
      <div className="section payable-section">
        <div className="info payable-info">
          <span className="info-title">
            <h4>Payable by Credit Card</h4>
            {product.hasDiscount ||
            (product.rider && product.rider.length > 0 && product.rider[0].hasDiscount) ?
            <span className="suffix-text">(after discount)</span> : null}
          </span>
          {priceView}
        </div>
      </div >
    );
  }

  noteSection() {
    const {
      product,
    } = this.props;
    const premierInfo = 'https://www.prudential.com.sg/products/medical/pruextra-premier';
    return product.isConfirmation ? null : (
      <div className="section note-section">
        {
          product.rider
            .filter(rider => rider.additionalInfo)
            .map(({ extraInfo }, rIndex) => (
              <div key={rIndex}>
                <p className="group-title">
                  <sup>*</sup>
                  <span dangerouslySetInnerHTML={{ __html: extraInfo }} />
                  <a className="info-more-btn" href={premierInfo} target="_blank">Read more</a>
                </p>
              </div>
            ))
        }
        <p className="group-title"><sup>**</sup> Premiums (inclusive of the prevailing rate of GST) are not guaranteed and will increase as you get older.</p>
        <p className="group-title">Terms and Conditions apply.</p>
      </div>
    );
  }

  render() {
    const {
      product,
    } = this.props;
    const premiumSummaryClasses = cx([
      'ps-premium-summary',
      product.productName,
    ]);

    const baseSection = this.baseSection();
    const riderSection = this.riderSection();
    const totalSection = this.totalSection();
    const payableSection = this.payableSection();
    const noteSection = this.noteSection();

    return (
      <div className={premiumSummaryClasses}>
        {baseSection}
        {riderSection}
        {totalSection}
        {payableSection}
        {noteSection}
      </div>
    );
  }
}

export default PSPolicyDetails;
