package familybudge.service;

import familybudge.entity.User;
import familybudge.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.context.annotation.SessionScope;

@Service
@SessionScope
public class UserService {

    private User user;

    @Autowired
    private UserRepository userRepository;

    public User register(User user) {
        user.setRole(User.Role.USER);
        user.setBalance("0");
        return this.user = userRepository.save(user);
    }
    
    public User login(User user) throws UserNotValidException {
        if (isValid(user)) {
            return this.user = userRepository.findByUsername(user.getUsername());
        }
        throw new UserNotValidException();
    }
    
    public boolean isValid(User user){
        return userRepository.findByUsernameAndPassword(user.getUsername(), user.getPassword()).isPresent();
    }

    public boolean isLoggedIn() {
        return user != null;
    }

    public User getLoggedInUser() {
        return user;
    }
    
    public String activeInUser() {
        
        return user.getUsername();
    }

    public void logout() {
        user = null;
    }

}
