﻿using UnityEngine;

public class DestroyByContact:MonoBehaviour {
	public GameObject explosion;
	public int score;
	private GameController gameController;
	void Start(){
		GameObject gameControllerObject = GameObject.FindWithTag("GameController");
		if(gameControllerObject != null) {
			gameController = gameControllerObject.GetComponent<GameController>();
		}else{
			Debug.Log("Cannot find 'GameController' script");
		}
	}
	void OnTriggerEnter(Collider other) {
		if(other.tag == "Bolt") {
			Instantiate (explosion, transform.position, transform.rotation);
			gameController.AddScore(score);
			gameController.AddStreak();
			Destroy (other.gameObject);
			Destroy(gameObject);

		}
	}

}
