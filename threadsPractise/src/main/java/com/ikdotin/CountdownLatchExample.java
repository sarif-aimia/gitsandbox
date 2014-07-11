package com.ikdotin;

import java.util.concurrent.CountDownLatch;

/**
 * Uses two gates to calculate intialization of two thread. uses a start gate to make the threads
 * wait until the main thread is ready and then the main thread waits on the end gate until both threads
 * have completed. 
 */
public class CountdownLatchExample {

    public static void main(String[] args) throws InterruptedException {
        int noOfServices = 2;
        CountDownLatch startGate = new CountDownLatch(1);
        CountDownLatch endGate = new CountDownLatch(noOfServices);
        
        MyThread cachingService = new MyThread("Caching Service", 10000, startGate, endGate);
        new Thread(cachingService).start();
        
        MyThread timerService = new MyThread("Timer Service", 20000, startGate, endGate);
        new Thread(timerService).start();
        
        System.out.println("Main thread sleeping before startGate count down");
        Thread.sleep(10000);
        startGate.countDown();
        
        System.out.println("Waiting for count down latch threads to finish initialising");        
        long start = System.currentTimeMillis();
        endGate.await();
        long end = System.currentTimeMillis();
        
        System.out.println("Took " + (end - start));
    }
    
    private static class MyThread implements Runnable {

        private String serviceName;
        private CountDownLatch startGate;
        private CountDownLatch endGate;
        private int startupTime;
        
        public MyThread(String serviceName, int startupTime, CountDownLatch startGate, CountDownLatch endGate) {
            this.serviceName = serviceName;
            this.startupTime = startupTime;
            this.startGate = startGate;
            this.endGate = endGate;
        }
        
        @Override
        public void run() {
            try {
                startGate.await();
                System.out.println("Initializing " + serviceName + " Expected startup time is " + startupTime);
                Thread.sleep(startupTime);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            
            endGate.countDown();
        }
        
    }
    
}
