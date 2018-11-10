<?php
  class Pages extends Controller {
    public function __construct(){
     
    }
    
    public function index(){   
      $this->view('pages/index');
    }

    public function converter(){
      $this->view('pages/converter');
    }

    public function search(){
      $this->view('pages/search');
    }

    public function about(){
      $this->view('pages/about');
    }
  }