import UnityEngine.UI;

public class GameController extends MonoBehaviour {
	public var cue:GameObject;
	public var spawnValue:Vector3;
	private var cueCount:int = 2;
	public var startWait : float;
	public var waveWait : float;

	private var score:int;
	public var socreText:Text;

	private var streak:int;
	public var streakText:Text;

	public var goal:int;
	public var goalText:Text;

	private var gameOver:boolean;
	public var gameOverText:Text;
	function Start(){
		InitText();
		SpawnWaves();
	}
	function SpawnWaves(){
		yield WaitForSeconds(startWait);
		while(true){
			for (var i:int = 0; i < cueCount; i++){
			var spawnPosition = new Vector3(Random.Range(-spawnValue.x, spawnValue.x),spawnValue.y,spawnValue.z);
			var spawnRotation:Quaternion = Quaternion.identity;
			Instantiate(cue, spawnPosition, spawnRotation);
			}
			yield WaitForSeconds(waveWait);
		}
	}
	function InitText() {
		score = 0;
		streak = 0;
		UpdateScore();
		UpdateStreak();
		UpdateGoal();
		gameOver = false;
		gameOverText.text = "";
	}
	public function AddScore(value:int) {
		score += value;
		UpdateScore();
	}

	function UpdateScore() {
		socreText.text = "Score:" + score;
	}

	public function AddStreak(){
		streak++;
		UpdateStreak();
		UpdateGoal();
	}
	function UpdateStreak() {
		streakText.text = "STREAK:" + streak;
	}

	function UpdateGoal() {
		goalText.text = "Goal:" + streak + "/" + goal;
	}

	public function GameOver() {
		gameOver = true;
		gameOverText.text = "Game Over!";
	}

}