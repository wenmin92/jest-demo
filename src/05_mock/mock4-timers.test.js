import { timerGame } from './timerGame';
import { infiniteTimerGame } from './infiniteTimerGame';

jest.useFakeTimers();

beforeEach(() => {
    jest.spyOn(global, 'setTimeout');
});

test('waits 1 second before ending the game', () => {

    const fn = jest.fn();
    timerGame(fn);

    expect(setTimeout).toHaveBeenCalledTimes(1);
    console.log('jest.isMockFunction(setTimeout);', jest.isMockFunction(setTimeout));
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
});

test('calls the callback after 1 second', () => {
    const fn = jest.fn();
    timerGame(fn);

    // At this point in time, the callback should not have been called yet
    expect(callback).not.toBeCalled();

    // Fast-forward until all timers have been executed
    jest.runAllTimers();

    // Now our callback should have been called!
    expect(fn).toBeCalled();
    expect(fn).toHaveBeenCalledTimes(1);
});

it('schedules a 10-second timer after 1 second', () => {
    const callback = jest.fn();
  
    infiniteTimerGame(callback);
  
    // At this point in time, there should have been a single call to
    // setTimeout to schedule the end of the game in 1 second.
    expect(setTimeout).toBeCalledTimes(1);
    expect(setTimeout).toHaveBeenNthCalledWith(1, expect.any(Function), 1000);
  
    // Fast forward and exhaust only currently pending timers
    // (but not any new timers that get created during that process)
    jest.runOnlyPendingTimers();
  
    // At this point, our 1-second timer should have fired its callback
    expect(callback).toBeCalled();
  
    // And it should have created a new timer to start the game over in
    // 10 seconds
    expect(setTimeout).toBeCalledTimes(2);
    expect(setTimeout).toHaveBeenNthCalledWith(2, expect.any(Function), 10000);
  });