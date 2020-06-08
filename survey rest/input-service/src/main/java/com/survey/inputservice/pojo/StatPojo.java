package com.survey.inputservice.pojo;

public class StatPojo {
private float option1;
private float option2;
private float option3;
@Override
public String toString() {
	return "StatPojo [option1=" + option1 + ", option2=" + option2 + ", option3=" + option3 + "]";
}
public float getOption1() {
	return option1;
}
public void setOption1(int option1) {
	this.option1 = option1;
}
public float getOption2() {
	return option2;
}
public void setOption2(int option2) {
	this.option2 = option2;
}
public float getOption3() {
	return option3;
}
public void setOption3(int option3) {
	this.option3 = option3;
}
public StatPojo(float stat1, float stat2, float stat3) {
	super();
	this.option1 = stat1;
	this.option2 = stat2;
	this.option3 = stat3;
}
public StatPojo() {
	super();
	// TODO Auto-generated constructor stub
}

}
