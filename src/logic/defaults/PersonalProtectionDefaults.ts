import DefaultsBase from "./DefaultsBase";
import PersonalProtectionGroupModel from '@/logic/models/operating_resources/PersonalProtectionGroupModel';


class PersonalProtectionDefaults extends DefaultsBase<PersonalProtectionGroupModel> {
    protected setCommons(inItem: PersonalProtectionGroupModel): void {
        inItem.total.value = 0;
    }

    protected setExtras(inItem: PersonalProtectionGroupModel): void {
    }

    protected setMixingCentral_Manual(inItem: PersonalProtectionGroupModel): void {
        this.setUnitCostItem(inItem.bataEsterilUnUso, 2.00, 4000.00);
        this.setUnitCostItem(inItem.cubrezapatosDesechables, 2.00, 300.00);
        this.setUnitCostItem(inItem.gorroDesechable, 2.00, 300.00);
        this.setUnitCostItem(inItem.guantesEsterilesDesechables, 4.00, 1000.00);
        this.setUnitCostItem(inItem.mascarillaQuirurgica, 2.00, 100.00);
    }

    protected setMixingCentral_Automatic(inItem: PersonalProtectionGroupModel): void {
        this.setUnitCostItem(inItem.bataEsterilUnUso, 2.00, 4000.00);
        this.setUnitCostItem(inItem.cubrezapatosDesechables, 2.00, 300.00);
        this.setUnitCostItem(inItem.gorroDesechable, 2.00, 300.00);
        this.setUnitCostItem(inItem.guantesEsterilesDesechables, 2.00, 500.00);
        this.setUnitCostItem(inItem.mascarillaQuirurgica, 2.00, 100.00);
    }
}

export default PersonalProtectionDefaults;