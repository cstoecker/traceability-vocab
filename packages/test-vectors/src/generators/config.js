const { getPlace } = require('./Place');
const { getPostalAddress } = require('./PostalAddress');
const { getGeoCoordinates } = require('./GeoCoordinates');
const { getChemicalProperty } = require('./ChemicalProperty');
const { getMechanicalProperty } = require('./MechanicalProperty');
const { getMeasuredProperty } = require('./MeasuredProperty');
const { getMeasuredValue } = require('./MeasuredValue');
const { getObservation } = require('./Observation');
const { getCredential } = require('./Credential');
const { getInspector } = require('./Inspector');
const { getInspectionReport } = require('./InspectionReport');
const { getAgInspectionReport } = require('./AgInspectionReport');
const { getProductRegistrationEvidenceDocument } = require('./ProductRegistrationEvidenceDocument');

const generatorConfig = {
  Place: getPlace,
  PostalAddress: getPostalAddress,
  GeoCoordinates: getGeoCoordinates,
  ChemicalProperty: getChemicalProperty,
  MechanicalProperty: getMechanicalProperty,
  MeasuredProperty: getMeasuredProperty,
  MeasuredValue: getMeasuredValue,
  Observation: getObservation,
  Credential: getCredential,
  Inspector: getInspector,
  InspectionReport: getInspectionReport,
  AgInspectionReport: getAgInspectionReport,
  ProductRegistrationEvidenceDocument: getProductRegistrationEvidenceDocument,
};

module.exports = generatorConfig;
