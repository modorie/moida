/**
 * size 크기로 쪼개진 array를 반환
 *
 * 일정하게 나눠지지 않는다면, 마지막 요소는 나머지들로 구성
 *
 * @returns chunked array
 */

const chunk = <T>(arr: T[], size: number) =>
  arr.reduce(
    (acc, _, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]),
    [] as T[][]
  )

export default chunk
