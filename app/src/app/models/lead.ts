// This model is for leads
import { Address } from './address';
import { ContactDetails } from './contact-details';
import { riskPremiums } from "./riskPremiums";
import { Person } from "./person";
import { ClassGetter } from '@angular/compiler/src/output/output_ast';

export class LeadDetails {
    public quoteId: string = "";
    public referenceNumber: string = "";
    public totalPremium: number = 0;
    public addresses: Array<Address> = [];
    public agentDetails: Agent = new Agent();
    public brandDetails: BrandDetails = new BrandDetails();
    public brokerDetails: BrokerDetails = new BrokerDetails();
    public contactDetail: ContactDetails = new ContactDetails();
    public nonmotors: Array<object> = [{}]
    public quoteDetails: QuoteDetails = new QuoteDetails();
    public person: Person = new Person();
    public remarks: Array<string> = [""];
    public rewards: Array<object> = [{}]
    public riskPremiums: Array<riskPremiums> = [];
    public status: Status = new Status();
    public vehicles: Array<object> = [{}];
    constructor() {
        this.riskPremiums.push(new riskPremiums);
    }
}


class Agent {
    public agentName: string = "BIBOSP";
    public agentId: string = "BIBOSP";
    public systemId: string = "BIBOSP";
}

class BrandDetails {
    public brandId: string = "";
    public brandName: string = "";
}

class BrokerDetails {
    public brokerCode: string = "";
    public brokerGroup: string = "";
    public vdnNumber: string = "";
}

class QuoteDetails {
    public commencementDate: string = "";
    public cancellationDate: string = "";
    public effectiveDate: string = "";
    public itcScore: number = 0;
    public languageId: string = "";
    public underwriterCompanyCode: string = "";
    public isVIPClient: string = "Y";
}

class Status {
    public statusType: string = ""
    public updatedAt: string = ""
}