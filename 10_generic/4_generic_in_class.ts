/**
 * Generic in Class
 */

class Pagination<Data, Message> {
  data: Data[] = [];
  message?: Message;
  lastFetchedAt?: Date;
}

const pgData = new Pagination<number, string>();
pgData.data;
pgData.message;
pgData.lastFetchedAt;

class Pagination2<Data, Message> {
  data: Data[] = [];
  message?: Message;
  lastFetchedAt?: Date;

  constructor(data: Data[], message?: Message, lastFetchedAt?: Date) {
    this.data = data;
    this.message = message;
    this.lastFetchedAt = lastFetchedAt;
  }
}

const pagenation2 = new Pagination2<number, string>([1, 2, 3]);

pagenation2.data;
pagenation2.message;
pagenation2.lastFetchedAt;

class DefaultGeneric<T = boolean> {
  data: T[] = [];
}

const defaultGeneric = new DefaultGeneric();

defaultGeneric.data;
