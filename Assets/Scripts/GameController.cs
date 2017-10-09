using UnityEngine.UI;
using UnityEngine;
using System.Collections;
public class GameController:MonoBehaviour {
	public GameObject cue;
	public Vector3 spawnValue;
	private int cueCount;
	public float startWait;
	public float waveWait;

	private int score;
	public Text socreText;

	private int streak;
	public Text streakText;

	public int goal;
	public Text goalText;

	private bool gameOver;
	public Text gameOverText;
	void Start(){
		InitText();
		StartCoroutine(SpawnWaves());
	}
	IEnumerator SpawnWaves(){
		yield return new WaitForSeconds(startWait);
		while(true){
			for (int i = 0; i < cueCount; i++) {
				var spawnPosition = new Vector3(Random.Range(-spawnValue.x, spawnValue.x),spawnValue.y,spawnValue.z);
				Quaternion spawnRotation = Quaternion.identity;
				Instantiate(cue, spawnPosition, spawnRotation);
			}
			yield return new WaitForSeconds(waveWait);
		}
	}
	void InitText() {
		score = 0;
		streak = 0;
		UpdateScore();
		UpdateStreak();
		UpdateGoal();
		gameOver = false;
		gameOverText.text = "";
	}
	public void AddScore(int value) {
		score += value;
		UpdateScore();
	}

	void UpdateScore() {
		socreText.text = "Score:" + score;
	}

	public void AddStreak(){
		streak++;
		UpdateStreak();
		UpdateGoal();
	}
	void UpdateStreak() {
		streakText.text = "STREAK:" + streak;
	}

	void UpdateGoal() {
		goalText.text = "Goal:" + streak + "/" + goal;
	}

	public void GameOver() {
		gameOver = true;
		gameOverText.text = "Game Over!";
	}

}