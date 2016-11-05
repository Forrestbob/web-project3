/*
import java.util.Random;

public class Project3 {

	static int[] mario =   { 1, 2, 3, 4,
							 5, 6, 7, 8,
							 9,10,11,12,
							13,14,15, 0};
	
	public static void main(String[] args) {
		
		printArr();
		
		randomize();
		
		printArr();
		
	}
	
	
	public static boolean isAdjacentByIndex(int index){
		
		boolean adj = false;
		int zeroLoc = 0;
		
		for (int i = 0; i < mario.length; i++) {
			if (mario[i] == 0){
				zeroLoc = i;
			}
		}
		
		if (index == 3 || index == 5 || index == 7){
			if (index - zeroLoc == 1 || Math.abs(index - zeroLoc) == 4){			//-4, -1, or +4
				adj = true;
			}
		}
		else if (index == 4 || index == 8 || index == 12){
			if (index - zeroLoc == -1 || Math.abs(index - zeroLoc) == 4){			//-4, 1, or +4
				adj = true;
			}
		}
		else{
			if (Math.abs(index - zeroLoc) == 1 || Math.abs(index - zeroLoc) == 4){	//-4, -1, +1, or +4
				adj = true;
			}
		}
			return adj;
	}
	
	public static boolean isAdjacentByValue(int number){
		
		boolean adj = false;
		int zeroLoc = 0;
		int index = 0;
		
		for (int i = 0; i < mario.length; i++) {
			if (mario[i] == 0){
				zeroLoc = i;
			}
			if (mario[i] == number){
				index = i;
			}
		}
		
		if (index == 3 || index == 5 || index == 7){
			if (index - zeroLoc == 1 || Math.abs(index - zeroLoc) == 4){			//-4, -1, or +4
				adj = true;
			}
		}
		else if (index == 4 || index == 8 || index == 12){
			if (index - zeroLoc == -1 || Math.abs(index - zeroLoc) == 4){			//-4, 1, or +4
				adj = true;
			}
		}
		else{
			if (Math.abs(index - zeroLoc) == 1 || Math.abs(index - zeroLoc) == 4){	//-4, -1, +1, or +4
				adj = true;
			}
		}
		return adj;
	}
	
	
	public static void randomize(){		//this will always create a solvable result
		Random rand = new Random();
		int swaps = 0;
		
		while (swaps < 1000) {	//1000 swaps
			int randNum = rand.nextInt(16);	// between [0,15] (inclusive)
			if (isAdjacentByIndex(randNum)){
				swapByIndex(randNum);
				swaps++;
			}
		}
	}
	
	
	public static void swapByIndex(int a){	//swaps an element with the 0 cell by index
		int zeroLoc = 0;
		
		for (int i = 0; i < mario.length; i++) {
			if (mario[i] == 0){
				zeroLoc = i;
			}
		}
		int a_value = mario[a];
		
		mario[zeroLoc] = a_value; 
		mario[a] = 0;
	}
	
	public static void printArr(){
		for (int i = 0; i < mario.length; i++) {
			if(i%4 == 0){
				System.out.println();
			}
			System.out.print(mario[i] + " ");
		}
		System.out.println();
	}
	
}
*/