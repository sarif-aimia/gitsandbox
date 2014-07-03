package com.ikdotin;

/**
 * Hello world!
 *
 */
public class App {
    
    private Object myMonitor = new Object();
    
    public static void main( String[] args ) throws InterruptedException {
        
        App app = new App();
        MyThread t1 = new MyThread("t1", app);
        MyThread t2 = new MyThread("t1", app);
        
        new Thread(t1).start();
        new Thread(t2).start();
        
        Thread.sleep(5000);
        
        app.notifyAll2();
    }
    
    public void notifyAll2() {
        synchronized(myMonitor) {
            myMonitor.notifyAll();
        }
    }
    
    public void synchronisedMethod() throws InterruptedException {
        System.out.println("Thread " + Thread.currentThread().getId() + " is about to acquire a lock on myMonitor");
        synchronized(myMonitor) {
            System.out.println("Thread " + Thread.currentThread().getId() + " acquired lock and will sleep");
            myMonitor.wait();
            Thread.sleep(10000L);
            System.out.println("Thread " + Thread.currentThread().getId() + " woke up");
        }
        System.out.println("Thread " + Thread.currentThread().getId() + " has exited the synchronised block");
    }
    
    
    public void anotherMethod() {
        synchronized(myMonitor) {
            
        }
    }
    
    
}
