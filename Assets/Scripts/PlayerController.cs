using UnityEngine;
public class PlayerController:MonoBehaviour {
	private float nextAct;
	public float actRate;
	public GameObject shot;
	public Transform shotLeft;
	public Transform shotRight;
	void Update() {
		if(Input.GetKeyDown(KeyCode.RightArrow)) {
			nextAct = Time.time + actRate;
			Instantiate(shot, shotRight.position, shotRight.rotation);
			GetComponent<AudioSource>().Play();
		}
		else if(Input.GetKeyDown(KeyCode.LeftArrow)) {
			nextAct = Time.time + actRate;
			Instantiate(shot, shotLeft.position, shotLeft.rotation);
			GetComponent<AudioSource>().Play();
		}
	}
}
