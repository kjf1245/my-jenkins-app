import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Item} from "../models/item";
import {AuthService} from "./auth.service";
import {it} from "selenium-webdriver/testing";

@Injectable()
export class ItemService {

  constructor(private http: HttpClient,
              private auth: AuthService) { }
  findOne(itemId: number): Observable<Item> {
    return this.http.get<Item>(`http://localhost:8080/items/item/${itemId}`);
  }
  getAllSellingItems(): Observable<Item[]> {
    return this.http.get<Item[]>(`http://localhost:8080/items`);
  }
  getSearchResult(word: string): Observable<Item[]> {
    return this.http.get<Item[]>(`http://localhost:8080/items/search/${word}`);
  }
  getAllItemsBySellerId(sellerId: number): Observable<Item[]> {
    return this.http.get<Item[]>(`http://localhost:8080/items/seller/${sellerId}`);
  }
  getAllSellItemsBySellerId(sellerId: number): Observable<Item[]> {
    return this.http.get<Item[]>(`http://localhost:8080/items/seller/sell/${sellerId}`);
  }
  getAllSoldItemsBySellerId(sellerId: number): Observable<Item[]> {
    return this.http.get<Item[]>(`http://localhost:8080/items/seller/sold/${sellerId}`);
  }
  getAllBoughtItemsByBuyerId(buyerId: number): Observable<Item[]> {
    return this.http.get<Item[]>(`http://localhost:8080/items/buyer/bought/${buyerId}`);
  }
  submitNewSellItem  (price: number, productName: string, description: string): Observable<any> {
    return this.http.post(`http://localhost:8080/items/item/new/${this.auth.id}`,
      {
        price: price,
        productName: productName,
        description: description
    });
  }
  updateSellItem(itemId: number, sellerId: number, price: number, productName: string, description: string) {
    return this.http.post(`http://localhost:8080/items/item/update/${itemId}`,
      {
        sellerId: sellerId,
        price: price,
        productName: productName,
        description: description
      });
  }
  removeSellItem(itemId: number) {
    return this.http.post(`http://localhost:8080/items/item/delete`,
      {
        itemId: itemId
      });
  }

}
