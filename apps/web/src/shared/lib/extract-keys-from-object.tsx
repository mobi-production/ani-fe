/**
 * 객체의 키들을 해당 객체 타입의 키 배열로 변환합니다.
 *
 *`Object.keys()`가 기본적으로 `string[]`을 반환하는 것과 달리,
 * 타입 안정적으로 해당 객체의 키 타입을 보장합니다.
 *
 * @param {T} object - 키를 추출할 객체
 * @returns {Array<keyof T>} 객체의 키 배열
 *
 * @example
 * const user = { name: 'aaa', age: 100 };
 * const keys = extractKeysFromObject(user);
 * console.log(keys); // ['name', 'age']
 */

export function extractKeysFromObject<T extends object>(object: T): Array<keyof T> {
  return Object.keys(object) as Array<keyof T>
}
