public class PlayerController extends MonoBehaviour {
	private var nextAct:float;
	public var actRate:float;
	public var shot:GameObject;
	public var shotLeft:Transform;
	public var shotRight:Transform;
	function Update() {
		if(Input.GetKeyDown(KeyCode.RightArrow)) {
			nextAct = Time.time + actRate;
			Instantiate(shot, shotRight.position, shotRight.rotation);
			GetComponent.<AudioSource>().Play();
		}
		else if(Input.GetKeyDown(KeyCode.LeftArrow)) {
			nextAct = Time.time + actRate;
			Instantiate(shot, shotLeft.position, shotLeft.rotation);
			GetComponent.<AudioSource>().Play();
		}
	}
}
