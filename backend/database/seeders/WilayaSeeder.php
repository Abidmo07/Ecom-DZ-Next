<?php

namespace Database\Seeders;

use App\Models\Wilaya;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class WilayaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $wilayas = [
            ['name' => 'أدرار', 'delivery_price' => 1200],
            ['name' => 'الشلف', 'delivery_price' => 800],
            ['name' => 'الأغواط', 'delivery_price' => 1000],
            ['name' => 'أم البواقي', 'delivery_price' => 900],
            ['name' => 'باتنة', 'delivery_price' => 950],
            ['name' => 'بجاية', 'delivery_price' => 850],
            ['name' => 'بسكرة', 'delivery_price' => 900],
            ['name' => 'بشار', 'delivery_price' => 1100],
            ['name' => 'البليدة', 'delivery_price' => 550],
            ['name' => 'البويرة', 'delivery_price' => 700],
            ['name' => 'تمنراست', 'delivery_price' => 1500],
            ['name' => 'تبسة', 'delivery_price' => 950],
            ['name' => 'تلمسان', 'delivery_price' => 800],
            ['name' => 'تيارت', 'delivery_price' => 900],
            ['name' => 'تيزي وزو', 'delivery_price' => 750],
            ['name' => 'الجزائر', 'delivery_price' => 500],
            ['name' => 'الجلفة', 'delivery_price' => 1000],
            ['name' => 'جيجل', 'delivery_price' => 800],
            ['name' => 'سطيف', 'delivery_price' => 850],
            ['name' => 'سعيدة', 'delivery_price' => 950],
            ['name' => 'سكيكدة', 'delivery_price' => 850],
            ['name' => 'سيدي بلعباس', 'delivery_price' => 900],
            ['name' => 'عنابة', 'delivery_price' => 650],
            ['name' => 'قالمة', 'delivery_price' => 800],
            ['name' => 'قسنطينة', 'delivery_price' => 600],
            ['name' => 'المدية', 'delivery_price' => 750],
            ['name' => 'مستغانم', 'delivery_price' => 800],
            ['name' => 'المسيلة', 'delivery_price' => 950],
            ['name' => 'معسكر', 'delivery_price' => 900],
            ['name' => 'ورقلة', 'delivery_price' => 1200],
            ['name' => 'وهران', 'delivery_price' => 700],
            ['name' => 'البيض', 'delivery_price' => 1100],
            ['name' => 'إليزي', 'delivery_price' => 1500],
            ['name' => 'برج بوعريريج', 'delivery_price' => 850],
            ['name' => 'بومرداس', 'delivery_price' => 600],
            ['name' => 'الطارف', 'delivery_price' => 750],
            ['name' => 'تندوف', 'delivery_price' => 1600],
            ['name' => 'تسمسيلت', 'delivery_price' => 900],
            ['name' => 'الوادي', 'delivery_price' => 1100],
            ['name' => 'خنشلة', 'delivery_price' => 950],
            ['name' => 'سوق أهراس', 'delivery_price' => 850],
            ['name' => 'تيبازة', 'delivery_price' => 600],
            ['name' => 'ميلة', 'delivery_price' => 850],
            ['name' => 'عين الدفلى', 'delivery_price' => 750],
            ['name' => 'النعامة', 'delivery_price' => 1100],
            ['name' => 'عين تموشنت', 'delivery_price' => 800],
            ['name' => 'غرداية', 'delivery_price' => 1200],
            ['name' => 'غليزان', 'delivery_price' => 850],
            ['name' => 'تيميمون', 'delivery_price' => 1300],
            ['name' => 'برج باجي مختار', 'delivery_price' => 1500],
            ['name' => 'أولاد جلال', 'delivery_price' => 1000],
            ['name' => 'بني عباس', 'delivery_price' => 1200],
            ['name' => 'عين صالح', 'delivery_price' => 1400],
            ['name' => 'عين قزام', 'delivery_price' => 1600],
            ['name' => 'تقرت', 'delivery_price' => 1100],
            ['name' => 'جانت', 'delivery_price' => 1500],
            ['name' => 'المغير', 'delivery_price' => 1050],
            ['name' => 'المنيعة', 'delivery_price' => 1150],
        ];


        foreach ($wilayas as $wilaya) {
            Wilaya::create($wilaya);
        }
    }
}
