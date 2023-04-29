const valorMetros = prompt('insira um valor em metros: ')
const converter = prompt('escolha para qual valor quer converter: \n\nmm \ncm \ndm \ndam \nhm \nkm')

const valorConverter = parseFloat(valorMetros);

let valorConvertido = 0

switch (converter) {
    case 'cm':
        valorConvertido = valorConverter * 100;
        alert('os ' + valorConverter + ' metros' + ' convertidos para cm é ' + valorConvertido+ 'cm');
    break;
    case 'km':
        valorConvertido = valorConverter / 1000;
        alert('os ' + valorConverter + ' metros' + ' convertidos para km é ' + valorConvertido + 'km');
    break;
    case 'mm':
        valorConvertido = valorConverter * 1000;
        alert('os ' + valorConverter + ' metros' + ' convertidos para mm é ' + valorConvertido + 'cm');
    break;
    case 'dm':
        valorConvertido = valorConverter * 10;
        alert('os ' + valorConverter + ' metros' + ' convertidos para dm é ' + valorConvertido + 'dm');
    break;
    case 'dam':
        valorConvertido = valorConverter / 10;
        alert('os ' + valorConverter + ' metros' + ' convertidos para dam é ' + valorConvertido + 'dam');
    break;
    case 'hm':
        valorConvertido = valorConverter / 100;
        alert('os ' + valorConverter + ' metros' + ' convertidos para hm é ' + valorConvertido + 'hm');
    break;
    default:
        alert('Opção Inválida');
}