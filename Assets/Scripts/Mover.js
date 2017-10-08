public class Mover extends MonoBehaviour {
	private var rb:Rigidbody;
	public var speed : float;
	function Start () : void {
		rb = GetComponent.<Rigidbody>();
	    rb.velocity = transform.forward * speed;
	}
}