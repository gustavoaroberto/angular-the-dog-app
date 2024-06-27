type TDogBreed = {
    id: number;
    name: string;
    bred_for: string;
    breed_group: string;
    life_span: string;
    temperament: string;
    reference_image_id: string;
    weight: TDogBreedWeightHeight;
    height: TDogBreedWeightHeight;
    image: TDogBreedImage;
};

type TDogBreedWeightHeight = {
    imperial: string;
    metric: string;
};

type TDogBreedImage = {
    id: string;
    width: number;
    height: number;
    url: string;
};