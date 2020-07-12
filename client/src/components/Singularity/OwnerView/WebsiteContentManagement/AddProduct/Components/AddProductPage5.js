import React, { Fragment, useEffect, useContext } from 'react';
import { LogoImage } from 'styles/Singularity/ApplicationStyles/LogoStyles/';
import PiattoLogo from 'img/piatto/piattoLogo.png';
import { PageHeader } from 'styles/Singularity/ApplicationStyles/PageHeader';
import {
  FullWidthDivider,
  PartialWidthDivider
} from 'styles/Singularity/ApplicationStyles/PageDividerStyles';
import {
  InputLabel,
  IconCheckBoxRound,
  CheckBoxIcon,
  CheckBoxIconName,
  IconCheckBoxRoundButton,
  HiddenCheckbox
} from 'styles/Singularity/ApplicationStyles/FormStyles/InputStyles';
import {
  ActionButton,
  ButtonText,
  PrevoiusButton,
  ButtonContainer
  
} from 'styles/Singularity/ApplicationStyles/ButtonStyles';

import { PTSansText } from 'styles/Singularity/ApplicationStyles/TextStyles';

import {
  CenterAlignedColumnContainer,
  FlexRowContainer,
  FormSectionNameContainer
} from 'styles/Singularity/ApplicationStyles/ContainerStyles';
import addProductContext from 'components/Singularity/OwnerView/WebsiteContentManagement/AddProduct/State/addProductContext.js';

import SidePain from "components/Singularity/ApplicationView/WaitingIcons/SidePain"

const AddProductFourthPage = () => {
  useEffect(() => {
    getAddOnFlavourData();
    getProductVariantData();
    window.scrollTo(0, 0);
  }, []);

  const AddProductContext = useContext(addProductContext);

  const {
    addOnFlavourData,
    getAddOnFlavourData,
    getProductVariantData,
    handleAddOnFlavourChange,
    productVariantData,
    handleProductVariantChange,
    nextStep,
    previousStep,
    loading
  } = AddProductContext;


  if (loading){
    return <SidePain/>
  }
  return (
    <Fragment>
      <LogoImage src={PiattoLogo} height="74px" width="115px" />
      <PageHeader>
        <PTSansText fontSize="24px" color="#DAA520">
          Add Product to Menu
        </PTSansText>
      </PageHeader>
      <FullWidthDivider />
      <CenterAlignedColumnContainer>
        <FormSectionNameContainer style={{ marginTop: '5px' }}>
          <PTSansText fontSize="16px" color="#DAA520">
            Add on
          </PTSansText>
        </FormSectionNameContainer>
        <FlexRowContainer width="310px" marginTop="-30px">
          {addOnFlavourData.map((item, index) => {
            {
              return (
                <IconCheckBoxRoundButton>
                  <HiddenCheckbox
                    key={index}
                    name={item.itemName}
                    value={item.itemName}
                    onChange={e => handleAddOnFlavourChange(e)}
                  />
                  <IconCheckBoxRound checked={item.isChecked}>
                    <CheckBoxIcon src={item.itemIconURL} />
                  </IconCheckBoxRound>
                  <InputLabel for={item.itemName} style={{ marginTop: '15px' }}>
                    <CheckBoxIconName>
                      <PTSansText fontSize="16px">{item.itemName}</PTSansText>
                    </CheckBoxIconName>
                    <CheckBoxIconName>
                      <PTSansText fontSize="16px" lineHeight="18px">
                        <span>Rs. </span>
                        {item.itemPrice}
                      </PTSansText>
                    </CheckBoxIconName>
                  </InputLabel>
                </IconCheckBoxRoundButton>
              );
            }
          })}
        </FlexRowContainer>
        <PartialWidthDivider />
        <FormSectionNameContainer style={{ marginTop: '5px' }}>
          <PTSansText fontSize="16px" color="#DAA520">
            Product Variant
          </PTSansText>
        </FormSectionNameContainer>
        <FlexRowContainer width="310px" marginTop="30px">
          {productVariantData.map((item, index) => {
            {
              return (
                <IconCheckBoxRoundButton>
                  <HiddenCheckbox
                    key={index}
                    name={item.additionalInformation}
                    value={item.additionalInformation}
                    onChange={e => handleProductVariantChange(e)}
                  />
                  <IconCheckBoxRound checked={item.isChecked}>
                    <CheckBoxIcon src={item.additionalInformationIconURL} />
                  </IconCheckBoxRound>
                  <InputLabel
                    for={item.additionalInformation}
                    style={{ marginTop: '15px' }}
                  >
                    <CheckBoxIconName>
                      <PTSansText fontSize="16px" lineHeight="18px">
                        {item.additionalInformation}
                      </PTSansText>
                    </CheckBoxIconName>
                  </InputLabel>
                </IconCheckBoxRoundButton>
              );
            }
          })}
        </FlexRowContainer>
        <ButtonContainer>

<PrevoiusButton width="118px" value="submit"  onClick={previousStep}>
  <ButtonText>Previous</ButtonText>
</PrevoiusButton>
<ActionButton width="100px" onClick={nextStep}>
  <ButtonText>Next</ButtonText>
</ActionButton>
</ButtonContainer>   
      </CenterAlignedColumnContainer>
    </Fragment>
  );
};

export default AddProductFourthPage;
