const weathers: any = {
  Rain: 'Chuvoso',
  Clear: 'Limpo',
  Clouds: 'Nuvens',
  Snow: 'Neve',
  Extreme: 'Extremo',
};

export default (key: string): string => {
  if (key in weathers) {
    return weathers[key];
  } else {
    return key;
  }
};
