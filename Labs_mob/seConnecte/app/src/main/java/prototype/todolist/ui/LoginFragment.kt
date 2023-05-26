
import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Button
import android.widget.EditText
import android.widget.Toast
import androidx.navigation.fragment.findNavController
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch
import prototype.todolist.dao.MealDao
import prototype.todolist.databinding.FragmentLoginBinding
import prototype.todolist.model.LoginResponse
import prototype.todolist.ui.BaseFragment
import prototype.todolist.ui.ManagerFragmentDirections
import retrofit2.Response

class LoginFragment : BaseFragment<FragmentLoginBinding>(FragmentLoginBinding::inflate) {

    private lateinit var mealDao: MealDao

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View {
        return binding.root
    }

    override fun init(view: View) {
        mealDao = MealDao()

        binding.login.setOnClickListener {
            performLogin()
        }
    }

    override fun listeners(view: View) {
        // No additional listeners required for this fragment
    }

    private fun performLogin() {
        val email = binding.email.text.toString().trim()
        val password = binding.password.text.toString().trim()

        if (email.isNotEmpty() && password.isNotEmpty()) {
            showProgressBar()

            GlobalScope.launch(Dispatchers.Main) {
                try {
                    val response: Response<LoginResponse> = mealDao.login(email, password)

                    if (response.isSuccessful) {
                        // Login successful, navigate to the next screen
                        hideProgressBar()
                        //findNavController().navigate(R.id.action_loginFragment_to_mainFragment)
//                        val action =
//                        findNavController().navigate(action)
                    } else {
                        // Login failed, show error message
                        hideProgressBar()
                        showResponseError("Login failed")
                    }
                } catch (e: Exception) {
                    // Exception occurred, show error message
                    hideProgressBar()
                    showResponseError("Login failed: ${e.message}")
                }
            }
        } else {
            Toast.makeText(activity, "Please enter email and password", Toast.LENGTH_SHORT).show()
        }
    }
}
