package com.ikdotin;


public class MyThread implements Runnable {
    
    String s;
    App app;
    
    public MyThread(String s, App app) {
        this.s = s;
        this.app = app;
    }

    @Override
    public void run() {
        System.out.println("This is thread " + Thread.currentThread().getId() + " in run method");
        try {
            app.synchronisedMethod();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

}
