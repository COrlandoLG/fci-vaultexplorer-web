import { EnumDescriptions } from './Enums';

export function currencyFormat(value: any): any {
    let props: object = {
        style: 'currency',
        currency: 'USD'
    };

    return isNaN(Number(value)) ? '' :
        (new Intl.NumberFormat('en-US', props)).format(Number(value));
}

export function percentFormat(value: any, decimals?: number): any{

    if (decimals === undefined) {
        decimals = 2
    }

    let props: object = {
        style: 'percent',
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals/*Maximun*/
    };

    return isNaN(Number(value)) ? '' :
        (new Intl.NumberFormat('en-US', props)).format(Number(value));
}

export function dateFormat(value: any): any{
    return new Intl.DateTimeFormat("en-US", {
        year: 'numeric', month: '2-digit', day: '2-digit'
    }).format(value);
}

export function getValueEnum(type: any, value: number, replaceGuionForSpace: boolean = true): any{
    var item = EnumToArray(type, replaceGuionForSpace).filter(x => x.value === value)[0] as any;
    return (item ? item.label : "");
}

export function EnumToArray(typeEnum: any, replaceGuionForSpace: boolean = true): any[] {
	let values: any[] = [];
	for (var key in typeEnum) {
		if (typeof typeEnum[key] === 'string')
			values.push({ value: Number(key), label: (replaceGuionForSpace ? GetEnumDescription(key, typeEnum) : typeEnum[key]) });
	}
	return values;
}

export function GetEnumDescription(key: any, typeEnum: any): string {
	var listLabel = EnumDescriptions.get(typeEnum);
	var label = undefined;
	if (listLabel !== undefined) label = listLabel.get(parseInt(key));
	if (label === undefined) {
        label = typeEnum[key];
        return label.split('_').map((word:string) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
	}
	return label;
}

export function getDate(): string {
	var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    const dateNow = mm + '/' + dd + '/' + yyyy;
	return dateNow;
}