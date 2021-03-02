const faker = require('faker');
const { getOrganization } = require('./Organization');
const { getIssuerAgent } = require('./IssuerAgent');
const { getShippingStop } = require('./ShippingStop');
const { getEcommerceWayBillCommodityContent } = require('./EcommerceWayBillCommodityContent');
const { getChargeDeclaration } = require('./ChargeDeclaration');

const getEcommerceWayBillRegistrationEvidenceDocument = () => {

  const waybillNumber = `ACMEWayBill#${faker.random.number({ min: 1, max: 999 })}`;
  
  const NewDate = new Date(faker.date.future());
  
  const issuanceDate = `${NewDate.getMonth()}-${NewDate.getDay()}-${NewDate.getFullYear()}`;
  
  let issuer = getOrganization();
  delete issuer['@context'];
  
  let shipper = getOrganization();
  delete shipper['@context'];
  
  const sidNumber = faker.random.alphaNumeric({ count: 12 }).toUpperCase();
  
  let consignee = getOrganization();
  delete consignee['@context'];

  const cidNumber = faker.random.alphaNumeric({ count: 12 }).toUpperCase();

  let issuerAgent = getIssuerAgent();
  delete issuerAgent['@context'];

let numItems = faker.random.number({ min: 1, max: 4 });
let shippingRoute = [];
while (numItems > 0) {
let NewshippingRoute = getShippingStop();
delete NewshippingRoute['@context'];
shippingRoute.push(NewshippingRoute);
numItems -= 1;
} 

const gethandlingInstructions = () => {
    const types = ['Forward on to Example Forwarder in the US','Hand over to ACME Importer'];
    return faker.random.arrayElement(types);
  };

const handlingInstructionsSCI = faker.random.alphaNumeric({ count: 14 }).toUpperCase();

let wayBillCommodityContent = getEcommerceWayBillCommodityContent();
delete wayBillCommodityContent['@context'];

let chargeDeclaration = getChargeDeclaration();
delete chargeDeclaration['@context'];

  const example = {
    '@context': ['https://w3id.org/traceability/v1'],
    type: 'EcommerceWayBillRegistrationEvidenceDocument',
    issuanceDate,
    waybillNumber,
    waybillType: 'Single',
    issuer,
    shipper,
    sidNumber,
    consignee,
    cidNumber,
    issuerAgent,
    shippingRoute,
    handlingInstructions:  gethandlingInstructions(),
    handlingInstructionsSCI,
    wayBillCommodityContent,
    chargeDeclaration
  };
  return example;
};

module.exports = { getEcommerceWayBillRegistrationEvidenceDocument };