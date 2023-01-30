<?php
abstract class Food {
 public $name;
 public $category;
 
  public function Presentation(){
    return 'Food ';
 }
 public function __construct($n,$c)
     {
         $this->name=$n;
         $this->category=$c; 
     }
 abstract public function methode();
}

 interface IfoodGest   {

     public function Add($data);
     public function Remove($data);
     
}
 class FoodGest implements IfoodGest  {
    static $counter = 0;
     public function Add($data)
    {
        self::$counter++;
    }
     public function Remove($data){
        self::$counter--;
     }
}

class Vegetable extends Food {

    function __construct($name,$category)
    {
        $this->name = $name;
        $this->category = $category;

        return [$this->name ,$this->category] ;
    }
    public function Presentation(){
      return 'Vegetable :';

    }

    public function methode(){
                echo "The name is ".$this->name."  and the category is: ".$this->category."<br/>";
            }

}
class Fruit  extends Food {
    function __construct($name,$category)
    {
        $this->name = $name;
        $this->category = $category;
        return [$this->name ,$this->category] ;
    }
    public function Presentation(){
        return 'Fuit : ';
      }
      public function methode(){
        echo "The name is ".$this->name."  and the category is: ".$this->category."<br/>";
    }
}

// test program
$vegetable = new Vegetable('Tomato','Vegetable');
echo $vegetable->Presentation() ."<br>" ;// is a vegetable
echo $vegetable->methode() ."<br>" ;// methode

$fruit = new Fruit('Kiwi','Fruit');
echo $fruit->Presentation()."<br>";// is a fruit
echo $fruit->methode() ."<br>" ;// methode

$management = new FoodGest;
$management->Add($vegetable);
$management->Add($fruit);
echo FoodGest::$counter ."<br>";// echo :

$management2 = new FoodGest;
$management2->Add($vegetable);
$management2->Add($fruit);

echo FoodGest::$counter."<br>";//output : 



?>