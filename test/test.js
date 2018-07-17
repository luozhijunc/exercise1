var assert = require('assert')

// 描述一下这个测试用例什么意思。 描述一下这是一个数组的测试。
describe('Array', function() {
  // 然后描述一下测试数组的indexOf方法。
  describe('#indexOf()', function() {
    // 这个值不存在的时候, 应该return -1; 
    it('should return -1 when the value is not present', function() {
      // 验证indexOf, 当值不存在时, 是否应该返回-1.
      assert.equal(-1, [1, 2, 3].indexOf(4)/* 填空题 */)
    })
  })
})

// 描述一下, 现在在测试断言,
describe('assert', function () {
  // 断言要求a和b深度相等的。
  it('a和b应当深度相等', function () {
    var a = {
      c: {
        e: 1
      }
    }
    var b = {
      c: {
        e: 1
      }
    }
    // 验证传入的两个值 是否深度相等.  -- 验证某个函数的结果 是否和预期值一致。
    assert.deepStrictEqual(a, b)
  })

  it('可以捕获并验证函数fn的错误', function () {
    
    function fn() {
      xxx;
    }
    // 验证函数返回的异常, 是否是预期错误.   --  验证抛出的错误。
    // 如果是预期的错误, 那么就捕获。 否则就抛出去。
    assert.throws(fn,/xxx is not defined/)

    /* try{
      fn();
    }catch(e){
      assert.equal(e.message, 'xxx is not defined');
    } */
  })
})