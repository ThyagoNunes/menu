import { Order } from "@prisma/client";

export interface OrdersRepositoryShowData { 
  id: string;
};

export interface OrdersRepositoryCreateData {
  name: string, 
  patientId?: string,
  categoryId: string,
};

export interface OrdersRepositoryUpdateData { 
  id: string,
  name: string,
  patientId?: string,
  categoryId?: string, 
}

export interface OrdersRepositoryDeleteData { 
  id: string, 
}


export interface OrdersRepository { 
  index: ()  => Promise<Order[] | null>
  show: (data: OrdersRepositoryShowData) => Promise<Order | null>
  create: (data: OrdersRepositoryCreateData) => Promise<Order | null>
  update: (data: OrdersRepositoryUpdateData) => Promise<Order | null>
  delete: (data: OrdersRepositoryDeleteData) => Promise<Order | null>
}