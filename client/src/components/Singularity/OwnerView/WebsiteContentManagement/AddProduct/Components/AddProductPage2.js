import React, { Fragment, useContext, useEffect } from 'react';
import { LogoImage } from 'styles/Singularity/ApplicationStyles/LogoStyles/';
import PiattoLogo from 'img/piatto/piattoLogo.png';
import { PageHeader } from 'styles/Singularity/ApplicationStyles/PageHeader';
import { FullWidthDivider } from 'styles/Singularity/ApplicationStyles/PageDividerStyles';
import { PTSansText } from 'styles/Singularity/ApplicationStyles/TextStyles';

import { CenterAlignedColumnContainer } from 'styles/Singularity/ApplicationStyles/ContainerStyles';

import {
  InputLabel,
  UploadImageBackground,
  UploadFileInput
} from 'styles/Singularity/ApplicationStyles/FormStyles/InputStyles';

import {
  ActionButton,
  ButtonText,
  ButtonContainer,
  PrevoiusButton
} from 'styles/Singularity/ApplicationStyles/ButtonStyles';
import DoneIcon from 'components/Singularity/ApplicationView/DoneIcon';
import attachmentIcon from 'img/piatto/icons/attachmenticon.png';
import addProductContext from 'components/Singularity/OwnerView/WebsiteContentManagement/AddProduct/State/addProductContext.js';

function AddProductPage2() {
  const AddProductContext = useContext(addProductContext);

  const {
    productFileName,
    onFileSelect,
    fileInputRef,
    nextStep,
    previousStep
  } = AddProductContext;


    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <Fragment>
      <LogoImage src={PiattoLogo} height="74px" width="115px" />
      <PageHeader>
        <PTSansText fontSize="24px" color="#DAA520">
          Add product 
        </PTSansText>
      </PageHeader>
      <FullWidthDivider />
      <CenterAlignedColumnContainer>
        <InputLabel
          for="productFileName"
          style={{ marginTop: '80px', widthh: '358px' }}
        >
          Upload Image
        </InputLabel>
        <UploadImageBackground style={{ marginTop: '30px' }}>
          <img
            src={attachmentIcon}
            style={{ height: '80px', marginLeft: '35px', marginTop: '30px' }}
          />
          <UploadFileInput
            type="file"
            name="productFileName"
            onChange={onFileSelect('productFileName')}
            ref={fileInputRef}
          />
        </UploadImageBackground>
        <PTSansText fontSize ="18px" color="black">File Selected: { productFileName}</PTSansText>
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
}

export default AddProductPage2;
