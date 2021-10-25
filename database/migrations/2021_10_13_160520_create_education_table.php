<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEducationTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('education', function (Blueprint $table) {
            $table->id();
            $table->String('school');
            $table->string('years');
            $table->string('years_en');
            $table->string('course');
            $table->string('course_en');
            $table->string('course_descriptions');
            $table->string('course_descriptions_en');
            $table->integer('percentage');
            $table->string('missing')->nullable();
            $table->string('missing_en')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('education');
    }
}
