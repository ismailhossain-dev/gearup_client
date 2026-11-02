export interface IRegisterFormInputs {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface ILoginFormInputs {
  email: string;
  password: string;
}

export interface IGear {
  id: string;
  availableStock: string;
  categoryId: string;
  providerId: string;
  name: string;
  description: string;
  brand: string;
  image: string;
  pricePerDay: number;
  stock: number;
  isAvailable: boolean;
  createdAt: string;
  updatedAt: string;

}
