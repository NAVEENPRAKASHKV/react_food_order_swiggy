import { Sum } from "../../utils/sum";



test("test sum of two varable",()=>{
    const result = Sum(3,5)
    expect(result).toBe(8)
})