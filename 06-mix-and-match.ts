type CardNumber = {
  carNumber: number;
};

type CardDate = {
  expiryDate: string;
};

type CardDetails = CardNumber &
  CardDate & {
    cvv: number;
  };

export {};
